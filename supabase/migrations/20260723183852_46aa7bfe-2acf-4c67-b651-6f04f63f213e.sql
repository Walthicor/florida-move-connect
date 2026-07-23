CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  language TEXT NOT NULL DEFAULT 'en' CHECK (language IN ('en','es')),
  move_type TEXT,
  home_size TEXT,
  from_zip TEXT,
  to_zip TEXT,
  move_date DATE,
  name TEXT,
  email TEXT,
  phone TEXT,
  source_path TEXT,
  user_agent TEXT
);

GRANT INSERT ON public.leads TO anon;
GRANT INSERT, SELECT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.leads FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can submit a lead"
  ON public.leads FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE INDEX idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX idx_leads_language ON public.leads (language);