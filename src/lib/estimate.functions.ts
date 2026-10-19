import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';
import { estimateSchema } from './estimate-schema';
export const submitEstimate=createServerFn({method:'POST'}).inputValidator((input:unknown)=>estimateSchema.parse(input)).handler(async({data})=>{
 const url = process.env['SUPABASE_URL'] || process.env['VITE_SUPABASE_URL']; 
 const key = process.env['SUPABASE_PUBLISHABLE_KEY'] || process.env['VITE_SUPABASE_PUBLISHABLE_KEY'];
 if(!url||!key) throw new Error('Estimate requests are temporarily unavailable. Please try again shortly.');
 const client=createClient<Database>(url,key,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:(input,init)=>{const headers=new Headers(init?.headers);if(key.startsWith('sb_')&&headers.get('Authorization')===`Bearer ${key}`)headers.delete('Authorization');headers.set('apikey',key);return fetch(input,{...init,headers});}}});
 const {error}=await client.from('estimate_requests').insert(data);
 if(error)throw new Error('We could not save your request. Please try again.');
 return {success:true};
});
