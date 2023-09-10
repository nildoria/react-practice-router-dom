import { useParams, useNavigate } from 'react-router-dom';
export default function Post() {
  const params = useParams();
  const navigate = useNavigate();

  function goBack() {
    // navigate('/posts', {
    //   replace: true,
    // });
    navigate(-1);
  }

  return (
    <div>
      <h2>Post</h2>
      <p>Post id is {params.postId}</p>
      <button type="button" onClick={goBack}>
        Return
      </button>
    </div>
  );
}
