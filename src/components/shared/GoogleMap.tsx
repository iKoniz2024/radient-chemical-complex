"use client"

interface GoogleMapProps {
  lat: number
  lng: number
  zoom?: number
  className?: string
  title?: string
}

export function GoogleMap({
  lat,
  lng,
  className = "",
  title = "Radiant Chemical Complex",
}: GoogleMapProps) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1c7562dd411%3A0x73b33243961d0e31!2s${encodeURIComponent(title)}!5e0!3m2!1sen!2sbd!4v1700000000000`

  return (
    <div className={`relative ${className}`}>
      <iframe
        title={`Map - ${title}`}
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
