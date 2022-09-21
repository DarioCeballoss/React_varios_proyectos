function Data(props) {

  return (
    <section>
      <h2>Congressmen</h2>
      <p>The major power of the House is to pass federal legislation that affects the entire country, although its
        bills must also be passed by the Senate and further agreed to by the U.S. President before becoming law
        (unless both the House and Senate re-pass the legislation with a two-thirds majority in each chamber). The
        House has some exclusive powers: the power to initiate revenue bills, to impeach officials (impeached
        officials are subsequently tried in the Senate), and to elect the U.S. President in case there is no
        majority in the Electoral College.</p>
      <p>Each U.S. state is represented in the House in proportion to its population as measured in the census, but
        every state is entitled to at least one representative. </p>
      <table className="table-borderless text-center">
        <thead>
          <tr>
            <th>FULL NAME</th>
            <th>PARTY</th>
            <th>STATE</th>
            <th>SENIORITY</th>
            <th>PERCENTAGE OF VOTES</th>
          </tr>
        </thead>
        <tbody >
          {/*aca va el map*/}

          {props.congress.map((member, ind) => {
            return (
              <tr key={ind}>
                <td><a href={member.url}>{member.last_name} {member.first_name} {member.middle_name}</a></td>
                <td>{member.party}</td>
                <td>{member.state}</td>
                <td>{member.seniority}</td>
                <td>{member.votes_with_party_pct}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </section>
  )
}

export default Data;
