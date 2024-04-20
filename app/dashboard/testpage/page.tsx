async function getData() {
  const res = await fetch('http://localhost:3000/api/users/post')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main>
    <h1>Test API</h1>
    <a> *Tergantung format API JSON kalo array/nested array pake .map()</a>
  
    <div>
      
    </div>
  </main>
}