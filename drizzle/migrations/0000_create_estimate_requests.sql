CREATE TABLE public.estimate_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255 AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
 phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 25),
 city text NOT NULL CHECK (char_length(city) BETWEEN 2 AND 100),
 service text NOT NULL CHECK (service IN ('Gutter installation','Gutter repair','Gutter cleaning','Gutter guards','Downspouts & drainage','Fascia & soffit repair')),
 property_type text NOT NULL CHECK (property_type IN ('Residential','Commercial')),
 message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 2000)
);
GRANT INSERT ON public.estimate_requests TO anon, authenticated;
GRANT ALL ON public.estimate_requests TO service_role;
ALTER TABLE public.estimate_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may submit estimates" ON public.estimate_requests FOR INSERT TO anon, authenticated WITH CHECK (true);