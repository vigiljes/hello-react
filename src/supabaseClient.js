import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zulwwkcrwdvhzqagcjkk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1bHd3a2Nyd2R2aHpxYWdjamtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2NjU2MzAsImV4cCI6MTk5NDI0MTYzMH0.kb2fZnoyQXkusOFWz9LmDDC3WrBZ6uoTYqrKzW8eJZE'

export const supabase = createClient(supabaseUrl, supabaseKey)