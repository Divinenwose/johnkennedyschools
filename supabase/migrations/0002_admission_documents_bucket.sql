-- Private bucket for documents submitted with admission applications.
insert into storage.buckets (id, name, public)
values ('admission-documents', 'admission-documents', false)
on conflict (id) do nothing;