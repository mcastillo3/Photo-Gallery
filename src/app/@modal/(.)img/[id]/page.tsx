import { getImage } from "~/server/db/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idasNumber = Number(photoId);
  if (Number.isNaN(idasNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idasNumber);
  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
