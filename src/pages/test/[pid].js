import { useRouter } from "next/router";
import ButtonToHome from "@/components/ButtonToHome";

const Post = () => {
  const router = useRouter();
  const pid = router.query;
  return (
    <div>
      <p>Post in PID :{pid.pid}</p>;
      <ButtonToHome />
    </div>
  );
};

export default Post;
