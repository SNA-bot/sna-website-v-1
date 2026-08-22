// Not wired up yet — this site runs on placeholder content for now.
// When you're ready to plug in live data (news posts, gallery, staff list),
// create a .env file (see .env.example) and import this client wherever needed:
//
//   import { supabase } from '../supabaseClient'
//   const { data } = await supabase.from('news_posts').select('*')

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null
