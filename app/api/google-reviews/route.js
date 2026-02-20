export async function GET() {
  const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${API_KEY}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();

    return Response.json({
      rating: data.result.rating,
      total: data.result.user_ratings_total,
      reviews: data.result.reviews,
    });
  } catch (error) {
    return Response.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}