export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'default'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>{props.repository.link}</a>
    </li>
  );
}
