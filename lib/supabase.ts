import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pqtcarqgelpukafvalmr.supabase.co";
const supabaseKey = "sb_publishable_xbALnskMUgXeWAAgANTLrQ_5u8AO2oC";

export const supabase = createClient(supabaseUrl, supabaseKey);