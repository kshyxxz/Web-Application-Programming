import { useParams } from "react-router-dom";

export default function UserProfile() {
	const { userId } = useParams();
	return <h2>User Profile ID: {userId}</h2>;
}
