import React from 'react'

function PartyLoyalty(props) {
  let democrat = 0;
  let republican = 0;
  let independent = 0;
  let PROdemocrat = 0;
  let PROrepublican = 0;
  let PROindependent = 0;

  props.congress.forEach(element => {
    if (element.party === "D") {
      ++democrat;
      PROdemocrat += element.votes_with_party_pct;

    } else if (element.party === "R") {
      ++republican;
      PROrepublican = PROrepublican + element.votes_with_party_pct;


    } else {
      ++independent;
      PROindependent += element.votes_with_party_pct;
    }
  });
  let PROMd = (PROdemocrat.toFixed(3) / democrat).toFixed(3);
  let PROMr = (PROrepublican.toFixed(3) / republican).toFixed(3);
  let PROMi = 0;
  let totC = (democrat + republican + independent);
  let totP = ((PROdemocrat + PROindependent + PROrepublican) / totC).toFixed(3);

  let estadistica = {
    'senado': [
      {
        'Party': 'Democrat',
        'catidad': democrat,
        'promedio': PROMd,
      },
      {
        'Party': 'Republican',
        'catidad': republican,
        'promedio': PROMr,
      },
      {
        'Party': 'Independent',
        'catidad': independent,
        'promedio': PROMi,
      },
      {
        'Party': 'TOTAL',
        'catidad': totC,
        'promedio': totP,
      }

    ],
  };

  //ordena de <
  const menor = arr => {
    return arr.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);
  }

  const mayor = arr => {
    return arr.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
  }
  //10%
  //let 10 = Math.round(member.length * 0.1);
  //console.log('dies% ' + member.length);
  return (
    <section>
      <div className="row">
        <article className="col">
          <h4>Party Loyalty</h4>
          <p>
            Those who consider themselves to be strong partisans, strong Democrats and strong Republicans
            respectively, tend to be
            the most faithful in voting for their party's nominee for office and legislation that backs
            their party's agenda.
          </p>
        </article>


        <article className="col">
          <h4 className="text-right"> {props.name} at a galance </h4>
          <table className="table table-bordered text-center table-hover">
            <thead>
              <tr>
                <th>PARTY</th>
                <th>Nº OF REPS</th>
                <th>% VOTED W/ PARTY</th>
              </tr>
            </thead>

            <tbody >
              {estadistica.senado.map((member, ind) => {
                return (
                  <tr key={ind}>
                    <td>{member.Party}</td>
                    <td>{member.catidad}</td>
                    <td>{member.promedio}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </article>

      </div>
      <div className="row">

        <article className="col">
          <h4> Least Engaged (Bottom 10% Attendance) </h4>
          <table className="table table-bordered text-center table-hover">
            <thead>
              <tr>
                <th>NAME</th>
                <th>Nº MISSED VOTES</th>
                <th>% MISSED</th>
              </tr>
            </thead>

            <tbody>
              {menor(props.congress).slice(0, 10).map((member, ind) => {
                return (
                  <tr key={ind}>
                    <td><a href={member.url}>{member.last_name} {member.first_name} {member.middle_name}</a></td>
                    <td>{member.total_votes}</td>
                    <td>{member.missed_votes_pct}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </article>

        <article className="col">
          <h4>Most Engaged (Top 10% Attendance)</h4>
          <table className="table table-bordered text-center table-hover">
            <thead>
              <tr>
                <th>NAME</th>
                <th>Nº MISSED VOTES</th>
                <th>% MISSED</th>
              </tr>
            </thead>

            <tbody >
              {mayor(props.congress).slice(0, 10).map((member, ind) => {
                return (
                  <tr key={ind}>
                    <td><a href={member.url}>{member.last_name} {member.first_name} {member.middle_name}</a></td>
                    <td>{member.total_votes}</td>
                    <td>{member.missed_votes_pct}</td>
                  </tr>
                )
              })}


            </tbody>
          </table>
        </article>
      </div>
      <br></br><br></br><br></br>
    </section>
  )
}

export default PartyLoyalty;
