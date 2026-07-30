REVOKE SELECT, UPDATE, DELETE ON public.leads FROM anon;
REVOKE SELECT, UPDATE, DELETE ON public.leads FROM authenticated;
GRANT INSERT ON public.leads TO anon;
GRANT INSERT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;