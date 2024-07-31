import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idasNumber = Number(photoId);
  if (Number.isNaN(idasNumber)) throw new Error("Invalid photo id");

  return <FullPageImageView id={idasNumber} />;
}
