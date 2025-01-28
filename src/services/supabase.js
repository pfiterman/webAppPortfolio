import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fuvsrkghztolbbajghga.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1dnNya2doenRvbGJiYWpnaGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NjQ0MjQsImV4cCI6MjA1MjU0MDQyNH0.TtFLayHmx8axTj6pDlTcv0YbrV2jzpgdm2qvPfWmMDE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
