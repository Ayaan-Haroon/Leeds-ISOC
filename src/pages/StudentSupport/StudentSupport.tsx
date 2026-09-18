// Add student support information here, including chaplain and vice-president contact sections.
const StudentSupport = () => {
  return (
    <section className="relative min-h-screen overflow-hidden isolate">

      {/* GRAIN OVERLAY */}
      <div
        className="absolute inset-0 z-0 opacity-90 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/images/home/stickers-n-that/beige-paper.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        
        {/* Your announcements content goes here */}

      </div>

    </section>
  )
}

export default StudentSupport