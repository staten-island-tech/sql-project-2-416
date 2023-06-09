import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://soswerxgklesihmaougc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvc3dlcnhna2xlc2lobWFvdWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDg5MzgsImV4cCI6MTk5ODg4NDkzOH0.UDAmxvlTKXBgCXeAsLzW_Fh--ph9TQKGg-T6bB3awtA'
)
