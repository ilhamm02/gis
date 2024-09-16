import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function PlaceCard({ placeName, latitude, longitude }) {
  return (
    <Card className="rounded p-3 mt-3 border-slate-500">
      <CardHeader>
        <CardTitle className="font-bold text-lg">{placeName}</CardTitle>
      </CardHeader>
      <CardContent>
        Latitude: {latitude} <br />
        Longitude: {longitude}
      </CardContent>
    </Card>
  );
}

export default PlaceCard;
