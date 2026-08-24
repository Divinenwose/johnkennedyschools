import jsPDF from "jspdf";
import { schoolConfig } from "@/config/school-config";
import { feesConfig } from "@/config/fees-config";
import type { ApplicationRecord } from "@/lib/application-storage";

async function loadLogoBase64(): Promise<string | null> {
  try {
    const response = await fetch("/images/logo.png");
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
}

export async function generateAdmissionBill(record: ApplicationRecord) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = 56;

  // Navy header band
  doc.setFillColor(16, 35, 63); // navy-900
  doc.rect(0, 0, pageWidth, 110, "F");

  const logo = await loadLogoBase64();
  if (logo) {
    try {
      doc.addImage(logo, "PNG", margin, 24, 56, 56);
    } catch {
      // If the logo fails to decode, the header still reads fine without it.
    }
  }

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(schoolConfig.name, logo ? margin + 68 : margin, 48);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(212, 176, 100); // gold-ish
  doc.text("ADMISSION APPLICATION BILL", logo ? margin + 68 : margin, 66);

  doc.setTextColor(230, 230, 230);
  doc.setFontSize(8);
  doc.text(schoolConfig.campuses.college.address, logo ? margin + 68 : margin, 82);

  y = 140;
  doc.setTextColor(30, 30, 30);

  // Applicant details block
  const rows: [string, string][] = [
    ["Application Number", record.applicationNumber],
    ["Date", new Date(record.submittedAt).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })],
    [
      "Applicant Name",
      [record.student.firstName, record.student.middleName, record.student.lastName].filter(Boolean).join(" "),
    ],
    ["Class Applied For", record.student.classApplyingFor],
    ["Parent / Guardian", record.guardian.fullName],
    ["Status", record.status],
  ];

  doc.setFontSize(11);
  rows.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, margin, y);
    doc.setFont("helvetica", "normal");
    doc.text(value || "—", margin + 160, y);
    y += 22;
  });

  y += 10;
  doc.setDrawColor(220, 210, 180);
  doc.line(margin, y, pageWidth - margin, y);
  y += 30;

  // Fee section
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Application Fee", margin, y);
  y += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  if (feesConfig.applicationFee !== null) {
    doc.text("Amount Due:", margin, y);
    doc.setFont("helvetica", "bold");
    doc.text(formatCurrency(feesConfig.applicationFee, feesConfig.currency), margin + 160, y);
    y += 24;
  } else {
    doc.setTextColor(120, 110, 80);
    doc.text("Amount to be confirmed by the school office.", margin, y);
    doc.setTextColor(30, 30, 30);
    y += 24;
  }

  y += 10;

  // Payment instructions
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Payment Instructions", margin, y);
  y += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const { bankName, accountName, accountNumber } = feesConfig.payment;
  if (bankName && accountName && accountNumber) {
    doc.text(`Bank: ${bankName}`, margin, y);
    y += 18;
    doc.text(`Account Name: ${accountName}`, margin, y);
    y += 18;
    doc.text(`Account Number: ${accountNumber}`, margin, y);
    y += 18;
  } else {
    doc.setTextColor(120, 110, 80);
    doc.text("Payment details will be provided by the school office.", margin, y);
    doc.setTextColor(30, 30, 30);
    y += 18;
    doc.text("Please contact the school directly to complete payment.", margin, y);
    y += 18;
  }

  y += 20;

  // Notes
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Notes", margin, y);
  y += 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  feesConfig.notes.forEach((note) => {
    const wrapped = doc.splitTextToSize(`• ${note}`, pageWidth - margin * 2);
    doc.text(wrapped, margin, y);
    y += wrapped.length * 12 + 4;
  });

  // Footer contact
  const footerY = doc.internal.pageSize.getHeight() - 60;
  doc.setDrawColor(220, 210, 180);
  doc.line(margin, footerY - 14, pageWidth - margin, footerY - 14);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(90, 85, 75);
  doc.text(
    `${schoolConfig.contact.phones.join("  /  ")}${schoolConfig.contact.email ? "  •  " + schoolConfig.contact.email : ""}`,
    margin,
    footerY
  );
  doc.text(schoolConfig.campuses.nursery.address, margin, footerY + 14);

  doc.save(`Admission-Bill-${record.applicationNumber}.pdf`);
}
