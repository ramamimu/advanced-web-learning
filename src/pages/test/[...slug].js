import { useRouter } from "next/router";
import ButtonToHome from "@/components/ButtonToHome";
const Post = () => {
  const router = useRouter();
  const pid = router.query;

  return (
    <div>
      <p>
        Post in a slug:{" "}
        {pid?.slug &&
          pid.slug.map((slug) => {
            return slug + " ";
          })}
      </p>
      <ButtonToHome />
    </div>
  );
};

export default Post;
