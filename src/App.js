import React from "react";
import { MapPin, Car, Home, Ruler } from "lucide-react";

function App() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 font-sans">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">🏢 Prime Medical Office Space Available</h1>
        <p className="text-lg text-gray-600">
          Perfect for Physical Therapy, Healthcare, or Wellness Practices
        </p>
      </div>

      {/* Hero Image Placeholder */}
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-2xl shadow">
        <p className="text-gray-500">[Property Photo Placeholder]</p>
      </div>

      {/* Property Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl shadow p-6 space-y-4 bg-white">
          <h2 className="text-2xl font-semibold">Property Highlights</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><Ruler size={18}/> 2,450 sq. ft.</li>
            <li className="flex items-center gap-2"><Car size={18}/> 30 Parking Spaces</li>
            <li className="flex items-center gap-2"><Home size={18}/> Handicap Ramp Accessible</li>
            <li>6 Treatment / Office Rooms</li>
            <li>Sitting Area + Computer/Billing Area (25’ x 17’)</li>
            <li>Two Bathrooms</li>
            <li>Dedicated Supply Cabinet Area</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow p-6 space-y-4 bg-white">
          <h2 className="text-2xl font-semibold">Why This Location?</h2>
          <p className="text-gray-700">
            Located on Main Street in Throop, PA, just ½ mile from Scranton.
            This property offers excellent visibility and accessibility,
            surrounded by residential communities and close to referral doctors
            and hospitals. Ideal for JAG PT or similar healthcare tenants.
          </p>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={18}/> Main St, Throop, PA (½ mile from Scranton)
          </div>
        </div>
      </div>

      {/* Floor Plan / Back Page */}
      <div className="rounded-2xl shadow p-6 space-y-4 bg-white">
        <h2 className="text-2xl font-semibold">Floor Plan & Financials</h2>
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-xl">
          <p className="text-gray-500">[Floor Plan Placeholder]</p>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Lease Rate:</strong> Contact for details</li>
          <li><strong>Lease Type:</strong> Flexible terms available</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold">For Leasing Information:</p>
        <p className="text-gray-700">[Your Name] | [Phone Number] | [Email Address]</p>
        <button className="rounded-2xl px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 shadow">
          Request a Tour
        </button>
      </div>
    </div>
  );
}

export default App;
