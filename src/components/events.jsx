import hackathonlogo from "../assets/hacklogoWhite.png"
import semicolonlogo from "../assets/SemiColon.png"
import ideathonlogo from "../assets/Ideathon.png"
function Events(){
    return (
        <div className="Events-section">
            <div className="events_section_title">OUR EVENTS</div>
            <div className="Hackathon_event">
                <img className="event_image" src={hackathonlogo} alt="hack-logo"/>
                <div className="event-content">Hackathon provides an opportunity for participants to develop their technical and problem-solving skills, and to work collaboratively in a team-based setting. Secondly, the event can promote innovation and creativity by encouraging participants to think outside the box and develop new and unique solutions to complex problems.Finally, the hackathon can help to create a sense of community and foster a culture of innovation and entrepreneurship within the college or university.</div>
            </div>
            <div className="Semicolon_event">
                <div className="event-content">The  Semicolon  8.0  is  a  coding  competition  that  aims  to  bring  together  coders  of  all  levels  to  challenge  their  skills  and  push  their  boundaries.  The  competition  will  include  several  rounds  of  coding  challenges,  where  participants  will  have  to  solve  complex  problems using their coding skills.</div>               
                <img className="event_image" src={semicolonlogo} alt = "semicolon-logo"/>
            </div>
            <div className="Ideathon-event">
                <img className="event_image" src={ideathonlogo} alt="ideathonlogo"/>
                <div className="event-content">An  ideathon  is  an  event  that  brings  together  individuals  or  teams  to  brainstorm  and  generate  ideas  to  tackle  a  specific  problem  or  challenge.  The  objective  is  to  encourage  participants  to  think  creatively  and  come  up  with  novel  solutions.  The  following  are  the  expected  outcomes  of  an  ideathon.Firstly,  the  event  provides  a  platform  for  participants  to  generate  innovative  ideas  and  solutions  to  address  a specific  problem  or  challenge.  This  creates  an  opportunity  to  approach  problems  from  different angles and come up with creative solutions</div>      
            </div>    

        </div>
    )

}

export default Events;