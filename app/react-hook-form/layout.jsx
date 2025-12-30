

export default function RFHLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
      
          <main className=" w-[100vw]">{children}</main>
        
      </body>
    </html>
  )
}
