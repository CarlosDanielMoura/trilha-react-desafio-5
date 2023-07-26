import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://xqxkyougwxrmgyuslkyq.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxeGt5b3Vnd3hybWd5dXNsa3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMjk0NDIsImV4cCI6MjAwNTgwNTQ0Mn0.mkWLFJO9xwsyhEH-8G01iuzMnJPNAT_KhRDkcMkpFuo',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxeGt5b3Vnd3hybWd5dXNsa3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMjk0NDIsImV4cCI6MjAwNTgwNTQ0Mn0.mkWLFJO9xwsyhEH-8G01iuzMnJPNAT_KhRDkcMkpFuo',
  },
});
