// components/InfoItem.jsx
export default function InfoItem({ date, location, description }) {
  return (
    <div className="mb-3">
      <div className="fw-bold">
        {date} / {location}
      </div>
      <div>{description}</div>
    </div>
  );
}
