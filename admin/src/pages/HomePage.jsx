const GuidelinesPage = () => {
  return (
    <div>
      <h2 className="fw-bold"># Admin Guidelines</h2>
      <ul className="fs-3">
        <li>
          Make sure u have set the following before startring the election :
          <ul>
            <li>Election details</li>
            <li>Import Voters</li>
            <li>Add Candidates</li>
          </ul>
        </li>
        <li>
          To stop the Election press the STOP ELECTION button on details page
        </li>
        <li>
          The results are automatically published when Election is stopped
        </li>
      </ul>
    </div>
  )
}

export default GuidelinesPage
