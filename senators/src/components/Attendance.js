import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Attendance() {
  const [memberS, setMemberS] = useState([]);
  
  let democrat = 0;
  let republican = 0;
  let independent = 0;
  let PROdemocrat = 0;
  let PROrepublican = 0;
  let PROindependent = 0;

  useEffect(() => {

    let endPoint = `https://api.propublica.org/congress/v1/116/senate/members.json`;
    axios.defaults.headers['X-API-KEY'] = 'rDYUl6e93qumCwukl6dAaoa8TUr4c6Nt52clfUF';

    axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMemberS(apiData.results[0].members);

      }).catch((error) => {
        console.log(error);
      })
  }, []);

  memberS.forEach(element => {
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
  //let 10 = Math.round(memberS.length * 0.1);
  //console.log('dies% ' + memberS.length);
  return (
    <section>
      <div className="row">
        <article className="col">
          <h4>Attendance</h4>
          <p>The Constitution specifies that a majority of members constitutes a quorum to do business in each house.
            Representatives and senators rarely force the presence of a quorum by demanding quorum calls; thus, in most
            cases, debates continue even if a majority is not present.</p>

          <p>The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating "aye"
            or "no" when his or her name is announced. The House reserves roll-call votes for the most formal matters, as
            a roll-call of all 435 representatives takes quite some time; normally, members vote by electronic device. In
            the case of a tie, the motion in question fails. In the Senate, the Vice President may (if present) cast the
            tiebreaking vote.</p>

        </article>


        <article className="col">
          <h4 className="text-right"> Senate at a galance </h4>
          <table className="table table-bordered text-center table-hover">
            <thead>
              <tr>
                <th>PARTY</th>
                <th>Nº OF REPS</th>
                <th>% VOTED W/ PARTY</th>
              </tr>
            </thead>

            <tbody >
              {estadistica.senado.map((memberS, ind) => {
                return (
                  <tr key={ind}>
                    <td>{memberS.Party}</td>
                    <td>{memberS.catidad}</td>
                    <td>{memberS.promedio}</td>
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
              {menor(memberS).slice(0, 10).map((memberS, ind) => {
                return (
                  <tr key={ind}>
                    <td><a href={memberS.url}>{memberS.last_name} {memberS.first_name} {memberS.middle_name}</a></td>
                    <td>{memberS.total_votes}</td>
                    <td>{memberS.missed_votes_pct}</td>
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
              {mayor(memberS).slice(0, 10).map((memberS, ind) => {
                return (
                  <tr key={ind}>
                    <td><a href={memberS.url}>{memberS.last_name} {memberS.first_name} {memberS.middle_name}</a></td>
                    <td>{memberS.total_votes}</td>
                    <td>{memberS.missed_votes_pct}</td>
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

export default Attendance;
