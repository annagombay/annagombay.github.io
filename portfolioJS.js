// SOCIAL ICONS

function newWindowLinked() {
  window.open("https://www.linkedin.com/in/anna-gombay-a3b244131/");
}

function newWindowGit() {
  window.open("https://github.com/annagombay");
}

function newWindowInsta() {
  window.open("https://www.instagram.com/annagphoenix/");
}

//MED CIRCLES
function medHelper() {
  document.getElementById('textBackground').style.backgroundColor = '#3285D6';
  
  document.getElementById('appOverview').style.color = 'white';
  document.getElementById('appOverview').innerHTML =
  'App Overview <br> <br> MedHelper, promoted as a "personal healthcare assistant", is a mobile application designed to help prescription medication users stay on top of their treatment regimes. The app intends to encourage medication compliance and consistency.';

  document.getElementById('appImage').innerHTML = '<img src="images/medhelperMain.png" style="height: 25vw; width: 13vw">';

  document.getElementById('feedbackGrid').innerHTML = 
  '<table id="feedbackGrid" style="text-align: left; margin: 0vw; vertical-align: text-top; font-size: 1vw"> <tr> <td colspan="2" style="text-align: center"> MedHelper </td> </tr> <tr> <td style="width:50%;"> Likes <br> <br> - Users are notified when they are running low on medication <br> <br> - User is able to input a lot of details about their medication (e.g. tRx number, why they are taking it, what they should take it with) <br> <br> - User can input details about their pharmacy and doctor </td> <td style="width:50%; vertical-align: text-top"> Criticisms <br> <br>- The design is very clinical; it feels like filling out paperwork at doctor’s office <br> <br>  - The user flow is not intuitive-- leads to a lot of jumping back anforth from the homepage <br> <br> - It feels as though the app lacks a functional home screen </td> </tr> <tr> <td style="width:50%; "> Questions <br> <br> - How could a designer make filling out medication info feel like leswork? <br> <br> - Why is there so much whitespace within the application? <br> <br> - Which button should I press to begin using this app? </td>  <td style="width:50%; vertical-align: text-top"> Ideas <br> <br> - The home screen elements could be divided into meaningful chunks so thathe user doesn’t feel overwhelmed by options <br> <br> - Data entry could be more interactive <br> <br> - Icons and images could brighten up the design </td> </tr> </table> </div> </div>';
}

function round() {
  document.getElementById('textBackground').style.backgroundColor = '#3285D6';

  document.getElementById('appOverview').style.color = 'white';
  document.getElementById('appOverview').innerHTML =
  'App Overview <br> <br>Round is a mobile application that allows users to track their medications and make note of missed doses. By reminding users to remain disciplined in their medicine regime, Round helps individuals "worry less, live healthier, and be happier.'; 

  document.getElementById('appImage').innerHTML = '<img src="images/roundMain.png" style="height: 25vw; width: 13vw">';

  document.getElementById('feedbackGrid').innerHTML = 
  '<table id="feedbackGrid" style="text-align: left; margin: 0vw; vertical-align: text-top; font-size: 1vw"> <tr> <td colspan="2" style="text-align: center"> Round </td> </tr> <tr> <td style="width:50%; vertical-align: text-top;"> Likes <br> <br> - The design is delicate and aesthetically pleasing-- includes colorful microinteractions <br> <br> - The app tracks whether or not users have taken their meds and indicates missed doses on a calendar <br> <br> - Users are able to “un-take” medication </td> <td style="width:50%; vertical-align: text-top"> Criticisms <br> <br>- The app asks for strength of dose but doesn’t provide a unit of measurement; this might confuse users  <br> <br>  - The app is almost too simple; the data collected is valuable but nothing is done with it <br> <br> - The app is pleasant but ultimately lacks meaningful and competitive features </td> </tr> <tr> <td style="width:50%; vertical-align: text-top; "> Questions <br> <br> - What is the goal of this app? <br> <br> - How do users gain by using Round? <br> <br> - How might we broaden the depth of the app while maintaining a simplistic UI? </td>  <td style="width:50%; vertical-align: text-top"> Ideas <br> <br> - The data could be used to provide users with meaningful feedback <br> <br> - The app could allow users to keep track of their doctor’s information/pharmacy numbers <br> <br> - The app could indicate a percentage of miss doses per month </td> </tr> </table> </div> </div>'
}

function mediSafe() {
  document.getElementById('textBackground').style.backgroundColor = '#3285D6';

  document.getElementById('appOverview').style.color = 'white';
  document.getElementById('appOverview').innerHTML =
  'App Overview <br> <br> Medisafe is a HIPAA certified mobile application designed to help individuals consume their medication on time. The app delivers an innovative cloud-based platform that allows doctors and close others to monitor medication intake.';

  document.getElementById('appImage').innerHTML = '<img src="images/MediSafeMain.png" style="height: 25vw; width: 13vw">';

  document.getElementById('feedbackGrid').innerHTML = 
  '<table id="feedbackGrid" style="text-align: left; margin: 0vw; vertical-align: text-top; font-size: 1vw"> <tr> <td colspan="2" style="text-align: center"> Medisafe</td> </tr> <tr> <td style="width:50%; vertical-align: text-top;"> Likes <br> <br> - The app allows users to sync health data via wearables <br> <br> - The app provides an educational feature that teaches users about their medication <br> <br> - The app includes a report page that communicates weekly medication adherence </td> <td style="width:50%; vertical-align: text-top"> Criticisms <br> <br>- There is a diary feature but no writing prompts are provided  <br> <br>  - There is a mood feature but it is a simple 1-10 scale <br> <br> - Users might be somewhat overwhelmed by the default notification settings </td> </tr> <tr> <td style="width:50%; vertical-align: text-top; "> Questions <br> <br> - How come the inputted health data is not included in the report section? <br> <br> - Why isn’t the report delivered in a more concise manner? <br> <br> - What is the purpose of the dropdown icon on the homescreen? </td>  <td style="width:50%; vertical-align: text-top"> Ideas <br> <br> - The app could expand on their mood feature and include mood ratings in the report section <br> <br> - The report could be provided with multiple view options <br> <br> - Users might be overwhelmed by the app offerings; sections of the app could be grouped into meaningful chunks to simplify the design </td> </tr> </table> </div> </div>'
}

// MOOD CIRCLES
function daylio() {
  document.getElementById('textBackground').style.backgroundColor = 'white';

  document.getElementById('appOverview').style.color = '#1A1A1A';
  document.getElementById('appOverview').innerHTML =
  'App Overview <br> <br>Daylio is a daily mood tracking app that offers a simple, two step entry creation process. The app allows users to review how their mood trends, and how they relate to common daily activiites.';

  document.getElementById('appImage').innerHTML = '<img src="images/daylioMain.png" style="height: 25vw; width: 13vw">';

  document.getElementById('feedbackGrid').innerHTML = 
  '<table id="feedbackGrid" style="text-align: left; margin: 0vw; vertical-align: text-top; font-size: 1vw"> <tr> <td colspan="2" style="text-align: center"> Daylio </td> </tr> <tr> <td style="width:50%; vertical-align: text-top;"> Likes <br> <br> - The app provides notifications for achievements <br> <br> - Statistics are displayed in an intuitive way and with many view options (e.g. in a line graph, on a calendar, average daily mood, average monthly mood) <br> <br> - The process of rating your mood is quick and simple-- not much effort is required from the user </td> <td style="width:50%; vertical-align: text-top"> Criticisms <br> <br>- Achievements feel almost too easy to accomplish  <br> <br>  - There are too many variables to choose from for activities-- it would take a lot of data to form meaningful correlations <br> <br> - Option to log previous days might backfire-- the passage of time affects one’s memory of previous mood states (it should be strict about habit forming) </td> </tr> <tr> <td style="width:50%; vertical-align: text-top;"> Questions <br> <br> - Which demographic is this application designed for? <br> <br> - How did the designer go about choosing the variables of interest in the activities section? <br> <br> - How come the user can submit multiple entries per day? </td>  <td style="width:50%; vertical-align: text-top"> Ideas <br> <br> - Language could be altered to fit a larger demographic (e.g. words like “rad” and “meh” seem to target younger users) <br> <br> - App could include a more in-depth journal option/prompts for writing (instead of the “add note” placeholder) <br> <br> - Why are users rewarded with badges for things like unstable mood patterns? </td> </tr> </table> </div> </div>';
}

function reflectly() {
  document.getElementById('textBackground').style.backgroundColor = 'white';

  document.getElementById('appOverview').style.color = '#1A1A1A';
  document.getElementById('appOverview').innerHTML =
  'App Overview <br> <br>Marketed as a "mental health companion", Reflectly is an intelligent journal that uses AI to help users reflect on their daily thoughts and problems. The app also provides a daily mood tracker.';

  document.getElementById('appImage').innerHTML = '<img src="images/ReflectlyMain.png" style="height: 25vw; width: 13vw">';

  document.getElementById('feedbackGrid').innerHTML = 
  '<table id="feedbackGrid" style="text-align: left; margin: 0vw; vertical-align: text-top; font-size: 1vw"> <tr> <td colspan="2" style="text-align: center"> Reflectly </td> </tr> <tr> <td style="width:50%;"> Likes <br> <br> - A digital character walks you through the process of how to use the app <br> <br> - There are multiple levels of mood capturing (e.g. negative-positive valence, associated activities, feelings) <br> <br> - The app provides a filter to search how variables relate to each other (e.g. user can search “stories about friends where you felt angry”) </td> <td style="width:50%; vertical-align: text-top"> Criticisms <br> <br>- Too many variables to choose from on the mood rating pages-- makes app comprehensive but results in less meaningful data for the user  <br> <br>  - Too many prompts for the user to buy the full version <br> <br> - Some pages don’t have clear go-back/exit options </td> </tr> <tr> <td style="width:50%; "> Questions <br> <br> - Why don’t edits to activities update when I change them on the journal page (i.e. can I change my response or do I have to start over?) <br> <br> - How did the designer choose the mood capturing adjectives? <br> <br> - What is the goal of the “questions of the day” feature? </td>  <td style="width:50%; vertical-align: text-top"> Ideas <br> <br> - The app could provide a more concise, objective measure of mood  <br> <br> - The app could ask user how they might improve their day if they provide a negative mood rating <br> <br> - The designer could reconsider advertising the product as a journal for “happiness”-- all moods are important  </td> </tr> </table> </div> </div>';
}

function eMoods() {
  document.getElementById('textBackground').style.backgroundColor = 'white';

  document.getElementById('appOverview').style.color = '#1A1A1A';
  document.getElementById('appOverview').innerHTML =
  'App Overview <br> <br>eMoods is a mobile application designed for indiviudals with Bipolar disorder. The app allows users to track the highs and lows of their moods, sleep habits, medication, and other relevant symptoms.'

  document.getElementById('appImage').innerHTML = '<img src="images/eMoodsMain.png" style="height: 25vw; width: 13vw">';

  document.getElementById('feedbackGrid').innerHTML = 
  '<table id="feedbackGrid" style="text-align: left; margin: 0vw; vertical-align: text-top; font-size: 1vw"> <tr> <td colspan="2" style="text-align: center"> eMoods </td> </tr> <tr> <td style="width:50%; vertical-align: text-top;"> Likes <br> <br> - The app tracks users’ sleep schedule and weight <br> <br> - The app provides resources for emergency services (e.g. crisis hotline numbers, online therapy) <br> <br> - The app has a comprehensive mood rating scale that appears to mimic clinical tests </td> <td style="width:50%; vertical-align: text-top"> Criticisms <br> <br>- The app is designed specifically for individuals who have bipolar disorder, making the demographic of interest a very small percentage of the population (about 1%) <br> <br>  - How could the designer take advantage of colour to make viewing data more intuitive? <br> <br> - How could the UI have a less clinical feel? </td> </tr> <tr> <td style="width:50%; vertical-align: text-top; "> Questions <br> <br> - Why don’t edits to activities update when I change them on the journal page (i.e. can I change my response or do I have to start over?) <br> <br> - How did the designer choose the mood capturing adjectives? <br> <br> - What is the goal of the “questions of the day” feature? </td>  <td style="width:50%; vertical-align: text-top"> Ideas <br> <br> - The designer could expand on the educational aspect of the app <br> <br> - App could show how specific medications are correlated with mood <br> <br> - If the user responds “severe” to every negative mood rating, a suggestion to call for help could pop up </td> </tr> </table> </div> </div>';
}

// JOURNAL CIRCLES

function beingMe() {
  document.getElementById('textBackground').style.backgroundColor = '#ef537b';
  
  document.getElementById('appOverview').style.color = 'white';
  document.getElementById('appOverview').innerHTML =
  'App Overview <br> <br>Being Me is a journaling application which aims to help users stay centered and maintain their mental health. Inspired by teachings of mindfulness, the app guides useres through meditations and exercises to imrpove well-being.';

  document.getElementById('appImage').innerHTML = '<img src="images/beingMeMain.png" style="height: 25vw; width: 13vw">';

  document.getElementById('feedbackGrid').innerHTML = 
  '<table id="feedbackGrid" style="text-align: left; margin: 0vw; vertical-align: text-top; font-size: 1vw"> <tr> <td colspan="2" style="text-align: center"> Being Me </td> </tr> <tr> <td style="width:50%;"> Likes <br> <br> - The journal asks users to rate their mood and provides emojis to represent each mood <br> <br> - The app allows users to set goals and productive habits <br> <br> - The app encourages users to journal more by providing a star rating of feedback depth </td> <td style="width:50%; vertical-align: text-top"> Criticisms <br> <br>- Home screen is too busy-- background image is distracting and elements are not clearly divided <br> <br>  - UI design is inconsistent across screens <br> <br> - User is required to read through a lot of text heavy sections </td> </tr> <tr> <td style="width:50%; "> Questions <br> <br> - How come there are so many different options to choose from when choosing to record a journal entry? <br> <br> - Why doesn’t the home screen provide a summary of the user’s data? <br> <br> - How can we make the app interactive without taking navigation power away from the user? </td>  <td style="width:50%; vertical-align: text-top"> Ideas <br> <br> - The app could allow users to change the background image  <br> <br> - The app could compile the features into weekly progress reports <br> <br> - The app could  allow users to skip sections if they wish </td> </tr> </table> </div> </div>';
}


function diary() {
  document.getElementById('textBackground').style.backgroundColor = '#ef537b';

  document.getElementById('appOverview').style.color = 'white';
  document.getElementById('appOverview').innerHTML =
  'App Overview <br> <br>Diary is a minimalistic journaling application which encourages users to keep track of their life progress. The app is marketed as "simple and friendly".';

  document.getElementById('appImage').innerHTML = '<img src="images/diaryMain.png" style="height: 25vw; width: 13vw">';

  document.getElementById('feedbackGrid').innerHTML = 
  '<table id="feedbackGrid" style="text-align: left; margin: 0vw; vertical-align: text-top; font-size: 1vw"> <tr> <td colspan="2" style="text-align: center"> Diary </td> </tr> <tr> <td style="width:50%; vertical-align: text-top;"> Likes <br> <br> - The app has a very attractive and minimalistic UI <br> <br> - Users can assign a password to protect their information <br> <br> - Blank spaces separate missed-entry days  </td> <td style="width:50%; vertical-align: text-top"> Criticisms <br> <br>- The majority of desirable features are only available through the premium version <br> <br>  - The hamburger menu contains a list of seemingly unrelated variables <br> <br> - User cannot exit out of a journal session </td> </tr> <tr> <td style="width:50%; vertical-align: text-top; "> Questions <br> <br> - What is the purpose of the shuffle feature on the list of journal entries screen? <br> <br> - Why are weekends indicated in red? <br> <br> - Why can you add journal entries for the future? </td>  <td style="width:50%; vertical-align: text-top"> Ideas <br> <br> - Journal prompts could be added to inspire the user to write <br> <br> - The home screen could indicate the user’s commitment to journalling in graph form <br> <br> - The designer could review click events to ensure that all buttons lead to desired screen </td> </tr> </table> </div> </div>';
}

function journey() {
  document.getElementById('textBackground').style.backgroundColor = '#ef537b';

  document.getElementById('appOverview').style.color = 'white';
  document.getElementById('appOverview').innerHTML =
  'App Overview <br> <br>Journey is a journaling application that features "motivational coaches" and "happiness trainers". Through the encouragement of daily discipline, it aims to create a healthier, happier mind for users.';

  document.getElementById('appImage').innerHTML = '<img src="images/journeyMain.png" style="height: 25vw; width: 13vw">';

   document.getElementById('feedbackGrid').innerHTML = 
  '<table id="feedbackGrid" style="text-align: left; margin: 0vw; vertical-align: text-top; font-size: 1vw"> <tr> <td colspan="2" style="text-align: center"> Journey </td> </tr> <tr> <td style="width:50%; vertical-align: text-top;"> Likes <br> <br> - The app has a beautiful, immersive UI that captures the attention of users <br> <br> - The app provides journal coaches to help inspire users to write <br> <br> - Journal entries provide options to add other relevant data (e.g. mood, exercise, geotag) </td> <td style="width:50%; vertical-align: text-top"> Criticisms <br> <br>- The app allows users to add journal entries for the future <br> <br>  - You can only use one coach at a time <br> <br> - There are too many options to choose from on the landing screen </td> </tr> <tr> <td style="width:50%; vertical-align: text-top;"> Questions <br> <br> - What is the purpose of the “throwback” feature? Do you lose access to notes after the month is up? <br> <br> - How did the designers come up with themes for the coaching sessions? <br> <br> - Which screen is the homescreen? </td>  <td style="width:50%; vertical-align: text-top"> Ideas <br> <br> - The designers might consider using cards to separate journal entries  <br> <br> - The app could allow users to receive guidance from multiple coaches throughout the day <br> <br> - The designers could consider removing a couple of icons from the landing screen </td> </tr> </table> </div> </div>';
}
 
function downSlash() {
  document.getElementById("downSlash").scrollIntoView();

}

// GRID DATA SWITCH

function usability() {
  document.getElementById('usability').style.backgroundColor = "#10ac84";
  document.getElementById('aesthetics').style.backgroundColor = "transparent";
  document.getElementById('helpFeatures').style.backgroundColor = "transparent";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('demographics').style.backgroundColor = "transparent";

  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Apps that featured positive usability gave power to the user; these designs afforded users with the opportunity to correct mistakes (e.g. accidental button presses) and were laid out in an intuitive, efficient manner. <br> <br> <!-- criticisms -->  My data, however, reveals a relatively high proportion of usability issues in contrast to positive user experiences. The most notable criticism that emerged during my analysis was the amount of time and effort it took to use certain apps (particularly those involving medication). Whether it was due to poor structural design, vague instructions, or non-skippable animations, these applications seemed to risk leaving users frustrated during the navigation process. <br> <br> <!-- questions --> Expanding on the notion of poor structural design-- many questions arose regarding the layout and function of app elements. For instance, some applications featured an overwhelming number of home screen buttons, potentially leaving users uncertain of which option to prioritize. Further, certain elements did not carry out their tagged functions (e.g. edit feature on journal does not work > user must re-submit entire entry to include missed data), signalling questions surrounding the usability of the written code.  <br> <br> <!-- ideas --> In terms of fixing usability errors, several ideas come to mind: designers can ensure that homescreens are evident and accessible to the user by chunking priority items into 3-4 categories, developers can make data entry more interactive so that users don't feel as though they are filling out paperwork in a clinic, and--importantly-- always give the user power to skip through undesired sections of text or animation. Time is precious; designers must respect this.  ";
}

function aesthetics() {
  document.getElementById('usability').style.backgroundColor = "transparent";
  document.getElementById('aesthetics').style.backgroundColor = "#10ac84";
  document.getElementById('helpFeatures').style.backgroundColor = "transparent";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('demographics').style.backgroundColor = "transparent";

  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> My collective data indicates that app aesthetics were generally pleasant. Applications varied in visual design, but those that were most memorable used playful microinteractions, intuitive graphs, and minimalistic yet attention-capturing user interfaces.   <br> <br> <!-- criticisms -->  Naturally, some applications were not as immaculate as others. Criticisms arose as I noted evidence of inconsistent and lacklustre user interfaces. For example, certain apps failed to maintain consistent styling across pages, and others left large containers of white space in lieu of playful designs.  <br> <br> <!-- questions --> After reviewing my data related to aesthetics, I wondered how designers could use colour to make viewing data more intuitive. Several apps featured graphs on their homescreens, but some seemed to feature too many colours without an accessible legend, and others used single colour themes, dividing data into separate categories (and thus, many graphs to evaluate). How might designers use colour to signal meaning to users in a cohesive way?  <br> <br> <!-- ideas --> In order to maintain high level aesthetics, designers might consider the following: instead of using white space, design HTML cards with subtle border outlines to separate user entries, use icons and images to brighten up the user interface, keep the style of each screen relatively the same. ";
}


function helpFeatures() {
  document.getElementById('usability').style.backgroundColor = "transparent";
  document.getElementById('aesthetics').style.backgroundColor = "transparent";
  document.getElementById('helpFeatures').style.backgroundColor = "#10ac84";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('demographics').style.backgroundColor = "transparent";

 document.getElementById('gridFeedback').innerHTML = "<!-- likes --> I was happy to see that many of my research notes fell under the category of “helpful features”. Most notably, I admired how comprehensive some of the applications' tracking systems were; certain apps allowed users to submit health data related to mood, exercise, sleep, medication, and more. Advanced applications even provided users with the opportunity to sync their physiological data using wearable technology. Other helpful features included search filters that outputted correlations between variables of interest (e.g. how mood relates to spending time with friends), customizable goal setting and habit tracking, as well as educational resources. <br> <br> <!-- ideas --> As you can see based on the distrubution of variables above, these positive features inspired an even larger number of ideas. Designers may consider the following: expanding and improving the design of the filter search (e.g. revealing correlations between mood, medication, and activity level, crafting a comprehensive and empirically based mood rating system, creating smart algorithms that alert the user when their mood reveals concerning patterns, providing meaningful journal prompts, providing users with weekly wellness reports, and educating users about mood, medication and more). ";
}

function purposeDesign() {
  document.getElementById('usability').style.backgroundColor = "transparent";
  document.getElementById('aesthetics').style.backgroundColor = "transparent";
  document.getElementById('helpFeatures').style.backgroundColor = "transparent";
  document.getElementById('purposeDesign').style.backgroundColor = "#10ac84";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('demographics').style.backgroundColor = "transparent";

  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
}

function aversiveUX() {
  document.getElementById('usability').style.backgroundColor = "transparent";
  document.getElementById('aesthetics').style.backgroundColor = "transparent";
  document.getElementById('helpFeatures').style.backgroundColor = "transparent";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "#10ac84";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('dempgraphics').style.backgroundColor = "transparent";

  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
}

function joyfulUX() {
  document.getElementById('usability').style.backgroundColor = "transparent";
  document.getElementById('aesthetics').style.backgroundColor = "transparent";
  document.getElementById('helpFeatures').style.backgroundColor = "transparent";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "#10ac84";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('dempgraphics').style.backgroundColor = "transparent";

  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
}

function medAdherence() {
  document.getElementById('usability').style.backgroundColor = "transparent";
  document.getElementById('aesthetics').style.backgroundColor = "transparent";
  document.getElementById('helpFeatures').style.backgroundColor = "transparent";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "#10ac84";
  document.getElementById('dempgraphics').style.backgroundColor = "transparent";

  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
}

function demographics() {
  document.getElementById('usability').style.backgroundColor = "transparent";
  document.getElementById('aesthetics').style.backgroundColor = "transparent";
  document.getElementById('helpFeatures').style.backgroundColor = "transparent";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('demographics').style.backgroundColor = "#10ac84";

  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
}



// diary table cross through

function crossMe() {
  document.getElementById('lineThrough1').style.textDecoration = 'line-through';
  document.getElementById('lineThrough2').style.textDecoration = 'line-through';
  document.getElementById('lineThrough3').style.textDecoration = 'line-through';
  document.getElementById('lineThrough4').style.textDecoration = 'line-through';
  document.getElementById('lineThrough5').style.textDecoration = 'line-through';
  document.getElementById('lineThrough6').style.textDecoration = 'line-through';
  
  document.getElementById('keep1').style.backgroundColor = "#ef537b";
  document.getElementById('keep2').style.backgroundColor = "#ef537b";
  document.getElementById('keep3').style.backgroundColor = "#ef537b";

}

function dontCrossMe() {
  document.getElementById('lineThrough1').style.textDecoration = 'none';
  document.getElementById('lineThrough2').style.textDecoration = 'none';
  document.getElementById('lineThrough3').style.textDecoration = 'none';
  document.getElementById('lineThrough4').style.textDecoration = 'none';
  document.getElementById('lineThrough5').style.textDecoration = 'none';
  document.getElementById('lineThrough6').style.textDecoration = 'none';

  document.getElementById('keep1').style.backgroundColor = "#1a1a1a";
  document.getElementById('keep2').style.backgroundColor = "#1a1a1a";
  document.getElementById('keep3').style.backgroundColor = "#1a1a1a";
}

function turnPink1 () {
  document.getElementById('col1').style.backgroundColor = "#ef537b";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> Many of our participants voiced a predilection for applications that compute music suggestions based on existing libraries. Such a feature could save time for users wanting to access familiar music without mental exertion. Companies thus may benefit from strengthening the scope and validity of their suggestive algorithms.';
  }


function turnPink2 () {
  document.getElementById('col2').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> Popular streaming services such as Spotify and Apple Music make accessing music a breeze; with a simple click, users can add an unlimited number of songs and playlists to their device. The trouble comes, however, when music-goers attempt to access their libraries offline. Many of our participants expressed displeasure with the amount of data required to download and stream music, which is understandable given that access to streaming services alone comes at a price. Moreover, users commented that even after downloading songs, they became unavailable once outside of internet range. Given that we live in a digital era, companies might consider making their libraries’ accessibility more reliable. ';

  
}

function turnPink3 () {
  document.getElementById('col3').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> A simple finding-- there was a relatively equal division of time spent listening to music in the morning and at night. 44.4% of our participants reported being morning listeners, while 55.6% listened to music at night time. Interestingly, not one participant chose the third option we provided--listening in the afternoon. Under the assumption that our users follow relatively conventional lifestyles (i.e. they face obligations from approximately 9:00 am - 5:00 pm), this finding might be reflective of a tendency for users to listen to music when they have alone time.  ';
}

function turnPink4 () {
  document.getElementById('col4').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> When asked whether our users’ preferred music streaming features affected their mood, 88.9% of respondents answered “yes”. Of this cohort, 77.8% of users reported improvements in mood, while the remaining 11.1% said that their mood had changed for the worse. It’s difficult to know whether the participant whose mood declined was affected by the music itself, or some sort of technical failure on part of their preferred feature. One thing that is clear, however, is that music streaming applications generally serve as a mood booster.   ';
}

function turnPink5 () {
  document.getElementById('col5').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  
  document.getElementById('paragraph').innerHTML = '<br> Users want a feature that quickly recognizes music in their surroundings. <br><br>While applications with this technology surely exist, the feature itself is not typically integrated into popular music streaming services. Perhaps it is not every day that a pleasant song captures our attention, but when the time comes, the ability to quickly access its title and artist appears to be a user need. Imagine if your favourite streaming application was able to accurately decipher, locate and download an outside music source in seconds!<br><br>Users want access to lyrics<br><br>Whether it is to settle a dispute about a line in a song, to sing along, or simply to appreciate the writing of talented artists, some of our users desired access to lyrics as they used their music streaming services. In a generation where rapid access to information has become the norm, it is not surprising to receive such feedback . Music streaming platforms might even benefit from gamifying the process by turning lyrics into an opportunity for mobile karaoke! ';
}

function turnGreen1() {
  document.getElementById('meds').style.backgroundColor = "#10ac84";
  document.getElementById('mood').style.backgroundColor = "transparent";
  document.getElementById('journal').style.backgroundColor = "transparent";

  // document.getElementById('blurb').innerHTML = "Text Here";
}

function turnGreen2() {
  document.getElementById('meds').style.backgroundColor = "transparent";
  document.getElementById('mood').style.backgroundColor = "#10ac84";
  document.getElementById('journal').style.backgroundColor = "transparent";

  // document.getElementById('blurb').innerHTML = "Text Here";

}

function turnGreen3() {
  document.getElementById('meds').style.backgroundColor = "transparent";
  document.getElementById('mood').style.backgroundColor = "transparent";
  document.getElementById('journal').style.backgroundColor = "#10ac84";

  // document.getElementById('blurb').innerHTML = "Text Here";

}

// VANILLA JS VERSION-- NO SLIDING ANIMATION

// function overview() {
//     var x = document.getElementById("displayRoles");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function problem() {
//     var x = document.getElementById("displayProblem");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function inspire() {
//     var x = document.getElementById("inspirationPhase");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function ideate() {
//     var x = document.getElementById("ideatePhase");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function product() {
//     var x = document.getElementById("finalProduct");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }



  // $(document).ready(function(){
  //   $("#flip").click(function(){
  //     $("#panelProject").slideToggle("slow");
  //   });
  // });

  // $(document).ready(function(){
  //   $("#flipProblem").click(function(){
  //     $("#panelProblem").slideToggle("slow");
  //   });
  // });

  // $(document).ready(function(){
  //   $("#flipInspire").click(function(){
  //     $("#panelInspire").slideToggle("slow");
  //   });
  // });

  // $(document).ready(function(){
  //   $("#flipIdeate").click(function(){
  //     $("#panelIdeate").slideToggle("slow");
  //   });
  // });

  // $(document).ready(function(){
  //   $("#flipProduct").click(function(){
  //     $("#panelProduct").slideToggle("slow");
  //   });
  // });

  // $(document).ready(function(){
  //   $("#flipDiary").click(function(){
  //     $("#panelDiary").slideToggle("slow");
  //   });
  // });





var parallaxElements = $('.parallax'),
    parallaxQuantity = parallaxElements.length;

$(window).on('scroll', function () {

  window.requestAnimationFrame(function () {

    for (var i = 0; i < parallaxQuantity; i++) {
      var currentElement =  parallaxElements.eq(i);
      var scrolled = $(window).scrollTop();
          
        currentElement.css({
          'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
        });

    }
  });

});
