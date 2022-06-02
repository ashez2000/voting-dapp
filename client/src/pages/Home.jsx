import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img
          className="img-fluid"
          src="/img/vote.jpg"
          alt="vote illustration"
        />
      </div>
      <h2 className="fw-bold mb-5"># Guidelines for voters</h2>
      <ul className="fs-3 mb-5">
        <li className="mb-1">
          There is a few guidlines for user.
          <ul>
            <li className="mb-1">
              1. Only the allowed user of the organisation can vote.
            </li>
            <li className="mb-1">
              2. The voter need a metamask account to participate in election.
            </li>
            <li className="mb-1">
              3. The voter has to vote in the specified time gap decided by the
              admin.
            </li>
            <li className="mb-1">
              4. Voting authentication is done through OTP and it is sent to
              regeistered users.
            </li>
          </ul>
        </li>
        <li className="mb-1">
          Overall, voting process is divided into two phases. All of which will
          be initiated by the admin. User has to participate in the process
          according to current phase.
          <ul>
            <li className="mb-1">
              <strong>Voting Phase</strong> : After initialization of voting
              phase from admin user can cast the vote in voting section. The
              casting of vote can be simply done by clicking on "VOTE" button,
              after which transaction will be initiated and after comfirming
              transaction the vote will get successfully casted. After voting
              phase gets over, user will not be able to cast vote.
            </li>
            <li className="mb-1">
              <strong>Result Phase</strong> : This is the final stage of whole
              voting process during which the results of election will be
              displayed at "RESULT" section, after the admin has published the
              results.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
