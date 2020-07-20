// nav color palette  (dark to light)

// #ea1d52 
// #ec2f5f
// #ed416d
// #ef537b
// #f16589
// #f16589
// #f27797
// #f489a4

// Mind Map Case Nav

function toIntro() {    
    document.getElementById('chevvy').scrollIntoView();

    document.getElementById('intro').style.display = 'inline';
    document.getElementById('research').style.display = 'none';
    document.getElementById('research2').style.display = 'none';
    document.getElementById('define').style.display = 'none';
    document.getElementById('ideate').style.display = 'none';
    document.getElementById('prototype').style.display = 'none';
    document.getElementById('test').style.display = 'none';
    document.getElementById('finale').style.display = 'none';

    document.getElementById('chevronToIntro').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToResearch').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToDefine').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToIdeate').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToPrototype').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToTest').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToFinale').style.backgroundColor = '#1A1A1A';

}

function toResearch() {

    document.getElementById('chevvy').scrollIntoView();

    document.getElementById('chevronToIntro').style.backgroundColor = '#ec2f5f';
    document.getElementById('chevronToResearch').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToDefine').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToIdeate').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToPrototype').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToTest').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToFinale').style.backgroundColor = '#1A1A1A';

    document.getElementById('intro').style.display = 'none';
    document.getElementById('research').style.display = 'inline';
    document.getElementById('research2').style.display = 'none';
    document.getElementById('define').style.display = 'none';
    document.getElementById('ideate').style.display = 'none';
    document.getElementById('prototype').style.display = 'none';
    document.getElementById('test').style.display = 'none';
    document.getElementById('finale').style.display = 'none';

  }

function toResearch2 () {    
    document.getElementById('chevvy').scrollIntoView();

    document.getElementById('chevronToIntro').style.backgroundColor = '#ec2f5f';
    document.getElementById('chevronToResearch').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToDefine').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToIdeate').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToPrototype').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToTest').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToFinale').style.backgroundColor = '#1A1A1A';

    document.getElementById('intro').style.display = 'none';
    document.getElementById('research').style.display = 'none';
    document.getElementById('research2').style.display = 'inline';
    document.getElementById('define').style.display = 'none';
    document.getElementById('ideate').style.display = 'none';
    document.getElementById('prototype').style.display = 'none';
    document.getElementById('test').style.display = 'none';
    document.getElementById('finale').style.display = 'none';
  }

  function toDefine() {
    document.getElementById('chevvy').scrollIntoView();

    document.getElementById('chevronToIntro').style.backgroundColor = '#ed416d';
    document.getElementById('chevronToResearch').style.backgroundColor = '#ec2f5f';
    document.getElementById('chevronToDefine').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToIdeate').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToPrototype').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToTest').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToFinale').style.backgroundColor = '#1A1A1A';

    document.getElementById('intro').style.display = 'none';
    document.getElementById('research').style.display = 'none';
    document.getElementById('research2').style.display = 'none';
    document.getElementById('define').style.display = 'inline';
    document.getElementById('ideate').style.display = 'none';
    document.getElementById('prototype').style.display = 'none';
    document.getElementById('test').style.display = 'none';
    document.getElementById('finale').style.display = 'none';
  }

  function toIdeate() {
    document.getElementById('chevvy').scrollIntoView();
   
    document.getElementById('chevronToIntro').style.backgroundColor = '#ef537b';
    document.getElementById('chevronToResearch').style.backgroundColor = '#ed416d';
    document.getElementById('chevronToDefine').style.backgroundColor = '#ec2f5f';
    document.getElementById('chevronToIdeate').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToPrototype').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToTest').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToFinale').style.backgroundColor = '#1A1A1A';

    document.getElementById('intro').style.display = 'none';
    document.getElementById('research').style.display = 'none';
    document.getElementById('research2').style.display = 'none';
    document.getElementById('define').style.display = 'none';
    document.getElementById('ideate').style.display = 'inline';
    document.getElementById('prototype').style.display = 'none';
    document.getElementById('test').style.display = 'none';
    document.getElementById('finale').style.display = 'none';
  }

  function toPrototype() {
    document.getElementById('chevvy').scrollIntoView();
     document.getElementById('prototype').style.display = 'inline';

    document.getElementById('chevronToIntro').style.backgroundColor = '#f16589';
    document.getElementById('chevronToResearch').style.backgroundColor = '#ef537b';
    document.getElementById('chevronToDefine').style.backgroundColor = '#ed416d';
    document.getElementById('chevronToIdeate').style.backgroundColor = '#ec2f5f';
    document.getElementById('chevronToPrototype').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToTest').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToFinale').style.backgroundColor = '#1A1A1A';

    document.getElementById('intro').style.display = 'none';
    document.getElementById('research').style.display = 'none';
    document.getElementById('research2').style.display = 'none';
    document.getElementById('define').style.display = 'none';
    document.getElementById('ideate').style.display = 'none';
  
    document.getElementById('test').style.display = 'none';
    document.getElementById('finale').style.display = 'none';
  }

  function toTest() {
    document.getElementById('chevvy').scrollIntoView();
       document.getElementById('test').style.display = 'inline';

    document.getElementById('chevronToIntro').style.backgroundColor = '#f27797';
    document.getElementById('chevronToResearch').style.backgroundColor = '#f16589';
    document.getElementById('chevronToDefine').style.backgroundColor = '#ef537b';
    document.getElementById('chevronToIdeate').style.backgroundColor = '#ed416d';
    document.getElementById('chevronToPrototype').style.backgroundColor = '#ec2f5f';
    document.getElementById('chevronToTest').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToFinale').style.backgroundColor = '#1A1A1A';

    document.getElementById('intro').style.display = 'none';
    document.getElementById('research').style.display = 'none';
    document.getElementById('research2').style.display = 'none';
    document.getElementById('define').style.display = 'none';
    document.getElementById('ideate').style.display = 'none';
    document.getElementById('prototype').style.display = 'none';
    document.getElementById('finale').style.display = 'none';
  }

  function toFinale() {
    document.getElementById('chevvy').scrollIntoView();
   document.getElementById('finale').style.display = 'inline';
    document.getElementById('chevronToIntro').style.backgroundColor = '#f489a4';
    document.getElementById('chevronToResearch').style.backgroundColor = '#f27797';
    document.getElementById('chevronToDefine').style.backgroundColor = '#f16589';
    document.getElementById('chevronToIdeate').style.backgroundColor = '#ef537b';
    document.getElementById('chevronToPrototype').style.backgroundColor = '#ed416d';
    document.getElementById('chevronToTest').style.backgroundColor = '#ec2f5f';
    document.getElementById('chevronToFinale').style.backgroundColor = '#ea1d52';

    document.getElementById('intro').style.display = 'none';
    document.getElementById('research').style.display = 'none';
    document.getElementById('research2').style.display = 'none';
    document.getElementById('define').style.display = 'none';
    document.getElementById('ideate').style.display = 'none';
    document.getElementById('prototype').style.display = 'none';
    document.getElementById('test').style.display = 'none';
    
  }

  // Mind Map Case Nav Mobile

function toIntroMob() {  
  
  document.getElementById('chevvyMob').scrollIntoView();

  document.getElementById('finaleMob').style.display = 'none';


  // Nav bar
    document.getElementById('chevronToIntroMob').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToResearchMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToDefineMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToIdeateMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToPrototypeMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToTestMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToFinaleMob').style.backgroundColor = '#1A1A1A';

  // Intro
    document.getElementById('introMob').style.display = 'inline';  
    document.getElementById('dividerMobIntro').style.display = 'inline';
  // Research
    document.getElementById('researchMob').style.display = 'none';  
    document.getElementById('shouldersMob').style.display = 'none';
    document.getElementById('compMob').style.display = 'none';
    document.getElementById('blurbsMob').style.display = 'none';
    document.getElementById('logoTableMob').style.display = 'none';
    document.getElementById('likesMob').style.display = 'none';
    document.getElementById('critsMob').style.display = 'none';
    document.getElementById('ideasMob').style.display = 'none';
    document.getElementById('qsMob').style.display = 'none';  
    document.getElementById('dividerMobResearch').style.display = 'none';
  // Research 2
    document.getElementById('research2Mob').style.display = 'none';
    document.getElementById('dividerMobResearch2').style.display = 'none';
    document.getElementById('affinityMob').style.display = 'none';
    document.getElementById('graphMob1').style.display = 'none';
    document.getElementById('graphMob2').style.display = 'none';
    document.getElementById('dividerResearchMob3').style.display = 'none';
  // Research 3
    document.getElementById('userIntMob').style.display = 'none';
    document.getElementById('objectiveMob').style.display = 'none';
    document.getElementById('userQsMob').style.display = 'none';
    document.getElementById('stringMob').style.display = 'none';
    document.getElementById('personasMob').style.display = 'none';
    document.getElementById('personButtonMob').style.display = 'none';
    document.getElementById('dividerMobResearch3').style.display; 'none';
  //  Define
    document.getElementById('defineMob').style.display = 'none';
    document.getElementById('ideateMob').style.display = 'none';
    document.getElementById('prototypeMob').style.display = 'none';
    document.getElementById('testMob').style.display = 'none';
}


function toResearchMob() {  
  
  document.getElementById('chevvyMob').scrollIntoView();
  document.getElementById('finaleMob').style.display = 'none';


  // Nav bar
  document.getElementById('chevronToIntroMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToResearchMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToDefineMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToIdeateMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToPrototypeMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToTestMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToFinaleMob').style.backgroundColor = '#1A1A1A';
  // Intro
    document.getElementById('introMob').style.display = 'none';  
    document.getElementById('dividerMobIntro').style.display = 'none';
  // Research
    document.getElementById('researchMob').style.display = 'inline';  
    document.getElementById('shouldersMob').style.display = 'inline';
    document.getElementById('compMob').style.display = 'inline';
    document.getElementById('blurbsMob').style.display = 'inline';
    document.getElementById('logoTableMob').style.display = 'inline';
    document.getElementById('likesMob').style.display = 'inline';
    document.getElementById('critsMob').style.display = 'inline';
    document.getElementById('ideasMob').style.display = 'inline';
    document.getElementById('qsMob').style.display = 'inline';  
    document.getElementById('dividerMobResearch').style.display = 'inline';
  // Research 2
    document.getElementById('research2Mob').style.display = 'none';
    document.getElementById('dividerMobResearch2').style.display = 'none';
    document.getElementById('affinityMob').style.display = 'none';
    document.getElementById('graphMob1').style.display = 'none';
    document.getElementById('graphMob2').style.display = 'none';
    document.getElementById('dividerResearchMob3').style.display = 'none';
  // Research 3
    document.getElementById('userIntMob').style.display = 'none';
    document.getElementById('objectiveMob').style.display = 'none';
    document.getElementById('userQsMob').style.display = 'none';
    document.getElementById('stringMob').style.display = 'none';
    document.getElementById('personasMob').style.display = 'none';
    document.getElementById('personButtonMob').style.display = 'none';
    document.getElementById('dividerMobResearch3').style.display; 'none';
  //  Define
    document.getElementById('defineMob').style.display = 'none';
    document.getElementById('ideateMob').style.display = 'none';
    document.getElementById('prototypeMob').style.display = 'none';
    document.getElementById('testMob').style.display = 'none';

}

function toResearch2Mob () {    
  document.getElementById('chevvyMob').scrollIntoView();
  document.getElementById('finaleMob').style.display = 'none';

  // Nav bar
  document.getElementById('chevronToIntroMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToResearchMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToDefineMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToIdeateMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToPrototypeMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToTestMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToFinaleMob').style.backgroundColor = '#1A1A1A';
  // Intro
    document.getElementById('introMob').style.display = 'none';  
    document.getElementById('dividerMobIntro').style.display = 'none';
  // Research
    document.getElementById('researchMob').style.display = 'none';  
    document.getElementById('shouldersMob').style.display = 'none';
    document.getElementById('compMob').style.display = 'none';
    document.getElementById('blurbsMob').style.display = 'none';
    document.getElementById('logoTableMob').style.display = 'none';
    document.getElementById('likesMob').style.display = 'none';
    document.getElementById('critsMob').style.display = 'none';
    document.getElementById('ideasMob').style.display = 'none';
    document.getElementById('qsMob').style.display = 'none';  
    document.getElementById('dividerMobResearch').style.display = 'none';
  // Research 2
    document.getElementById('research2Mob').style.display = 'inline';
    document.getElementById('dividerMobResearch2').style.display = 'inline';
    document.getElementById('affinityMob').style.display = 'inline';
    document.getElementById('graphMob1').style.display = 'inline';
    document.getElementById('graphMob2').style.display = 'inline';
    document.getElementById('dividerResearchMob3').style.display = 'inline';
  // Research 3
    document.getElementById('userIntMob').style.display = 'none';
    document.getElementById('objectiveMob').style.display = 'none';
    document.getElementById('userQsMob').style.display = 'none';
    document.getElementById('stringMob').style.display = 'none';
    document.getElementById('personasMob').style.display = 'none';
    document.getElementById('personButtonMob').style.display = 'none';
    document.getElementById('dividerMobResearch3').style.display; 'none';
  //  Define
    document.getElementById('defineMob').style.display = 'none';
    document.getElementById('ideateMob').style.display = 'none';
    document.getElementById('prototypeMob').style.display = 'none';
    document.getElementById('testMob').style.display = 'none';
}


function toResearch3Mob () {    
    document.getElementById('chevvyMob').scrollIntoView();
    document.getElementById('finaleMob').style.display = 'none';

  // Define
    document.getElementById('chevronToIntroMob').style.backgroundColor = '#ec2f5f';
    document.getElementById('chevronToResearchMob').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToDefineMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToIdeateMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToPrototypeMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToTestMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToFinaleMob').style.backgroundColor = '#1A1A1A';
  // Intro
    document.getElementById('introMob').style.display = 'none';  
    document.getElementById('dividerMobIntro').style.display = 'none';
  // Research
    document.getElementById('researchMob').style.display = 'none';  
    document.getElementById('shouldersMob').style.display = 'none';
    document.getElementById('compMob').style.display = 'none';
    document.getElementById('blurbsMob').style.display = 'none';
    document.getElementById('logoTableMob').style.display = 'none';
    document.getElementById('likesMob').style.display = 'none';
    document.getElementById('critsMob').style.display = 'none';
    document.getElementById('ideasMob').style.display = 'none';
    document.getElementById('qsMob').style.display = 'none';  
    document.getElementById('dividerMobResearch').style.display = 'none';
  // Research 2
    document.getElementById('research2Mob').style.display = 'none';
    document.getElementById('dividerMobResearch2').style.display = 'none';
    document.getElementById('affinityMob').style.display = 'none';
    document.getElementById('graphMob1').style.display = 'none';
    document.getElementById('graphMob2').style.display = 'none';
    document.getElementById('dividerResearchMob3').style.display = 'none';
  // Research 3
    document.getElementById('userIntMob').style.display = 'inline';
    document.getElementById('objectiveMob').style.display = 'inline';
    document.getElementById('userQsMob').style.display = 'inline';
    document.getElementById('stringMob').style.display = 'inline';
    document.getElementById('personasMob').style.display = 'inline';
    document.getElementById('personButtonMob').style.display = 'inline';
    document.getElementById('dividerMobResearch3').style.display; 'inline';
  //  Define
    document.getElementById('defineMob').style.display = 'none';
    document.getElementById('ideateMob').style.display = 'none';
    document.getElementById('prototypeMob').style.display = 'none';
    document.getElementById('testMob').style.display = 'none';
}

function toDefineMob () {   

  document.getElementById('chevvyMob').scrollIntoView();
  document.getElementById('defineMob').style.display = 'inline';
  document.getElementById('finaleMob').style.display = 'none';
  document.getElementById('ideateMob').style.display = 'none';
  document.getElementById('prototypeMob').style.display = 'none';
  document.getElementById('testMob').style.display = 'none';

  // Nav Bar
  document.getElementById('chevronToIntroMob').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToResearchMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToDefineMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToIdeateMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToPrototypeMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToTestMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToFinaleMob').style.backgroundColor = '#1A1A1A';

  // Intro
    document.getElementById('introMob').style.display = 'none';  
    document.getElementById('dividerMobIntro').style.display = 'none';
  // Research
    document.getElementById('researchMob').style.display = 'none';  
    document.getElementById('shouldersMob').style.display = 'none';
    document.getElementById('compMob').style.display = 'none';
    document.getElementById('blurbsMob').style.display = 'none';
    document.getElementById('logoTableMob').style.display = 'none';
    document.getElementById('likesMob').style.display = 'none';
    document.getElementById('critsMob').style.display = 'none';
    document.getElementById('ideasMob').style.display = 'none';
    document.getElementById('qsMob').style.display = 'none';  
    document.getElementById('dividerMobResearch').style.display = 'none';
  // Research 2
    document.getElementById('research2Mob').style.display = 'none';
    document.getElementById('dividerMobResearch2').style.display = 'none';
    document.getElementById('affinityMob').style.display = 'none';
    document.getElementById('graphMob1').style.display = 'none';
    document.getElementById('graphMob2').style.display = 'none';
    document.getElementById('dividerResearchMob3').style.display = 'none';
  // Research 3
    document.getElementById('userIntMob').style.display = 'none';
    document.getElementById('objectiveMob').style.display = 'none';
    document.getElementById('userQsMob').style.display = 'none';
    document.getElementById('stringMob').style.display = 'none';
    document.getElementById('personasMob').style.display = 'none';
    document.getElementById('personButtonMob').style.display = 'none';
    document.getElementById('dividerMobResearch3').style.display; 'none';
  //  Define

}

function toIdeateMob () {   

  document.getElementById('chevvyMob').scrollIntoView();

  document.getElementById('chevronToIntro').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToResearch').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToDefine').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToIdeate').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToPrototype').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToTest').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToFinale').style.backgroundColor = '#1A1A1A';

  document.getElementById('defineMob').style.display = 'none';
  document.getElementById('ideateMob').style.display = 'inline';
  document.getElementById('finaleMob').style.display = 'none';
  document.getElementById('prototypeMob').style.display = 'none';
  document.getElementById('testMob').style.display = 'none';

  // Nav bar
  document.getElementById('chevronToIntroMob').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToResearchMob').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToDefineMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToIdeateMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToPrototypeMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToTestMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToFinaleMob').style.backgroundColor = '#1A1A1A';
  // Intro
    document.getElementById('introMob').style.display = 'none';  
    document.getElementById('dividerMobIntro').style.display = 'none';
  // Research
    document.getElementById('researchMob').style.display = 'none';  
    document.getElementById('shouldersMob').style.display = 'none';
    document.getElementById('compMob').style.display = 'none';
    document.getElementById('blurbsMob').style.display = 'none';
    document.getElementById('logoTableMob').style.display = 'none';
    document.getElementById('likesMob').style.display = 'none';
    document.getElementById('critsMob').style.display = 'none';
    document.getElementById('ideasMob').style.display = 'none';
    document.getElementById('qsMob').style.display = 'none';  
    document.getElementById('dividerMobResearch').style.display = 'none';
  // Research 2
    document.getElementById('research2Mob').style.display = 'none';
    document.getElementById('dividerMobResearch2').style.display = 'none';
    document.getElementById('affinityMob').style.display = 'none';
    document.getElementById('graphMob1').style.display = 'none';
    document.getElementById('graphMob2').style.display = 'none';
    document.getElementById('dividerResearchMob3').style.display = 'none';
  // Research 3
    document.getElementById('userIntMob').style.display = 'none';
    document.getElementById('objectiveMob').style.display = 'none';
    document.getElementById('userQsMob').style.display = 'none';
    document.getElementById('stringMob').style.display = 'none';
    document.getElementById('personasMob').style.display = 'none';
    document.getElementById('personButtonMob').style.display = 'none';
    document.getElementById('dividerMobResearch3').style.display; 'none';
  //  Define
}

function toPrototypeMob () {   

    document.getElementById('chevvyMob').scrollIntoView();

    document.getElementById('defineMob').style.display = 'none';
    document.getElementById('ideateMob').style.display = 'none';
    document.getElementById('prototypeMob').style.display = 'inline';
    document.getElementById('finaleMob').style.display = 'none';
    document.getElementById('testMob').style.display = 'none';

    // Nav bar
    document.getElementById('chevronToIntroMob').style.backgroundColor = '#f16589';
    document.getElementById('chevronToResearchMob').style.backgroundColor = '#ef537b';
    document.getElementById('chevronToDefineMob').style.backgroundColor = '#ed416d';
    document.getElementById('chevronToIdeateMob').style.backgroundColor = '#ec2f5f';
    document.getElementById('chevronToPrototypeMob').style.backgroundColor = '#ea1d52';
    document.getElementById('chevronToTestMob').style.backgroundColor = '#1A1A1A';
    document.getElementById('chevronToFinaleMob').style.backgroundColor = '#1A1A1A';

  // Intro
    document.getElementById('introMob').style.display = 'none';  
    document.getElementById('dividerMobIntro').style.display = 'none';
  // Research
    document.getElementById('researchMob').style.display = 'none';  
    document.getElementById('shouldersMob').style.display = 'none';
    document.getElementById('compMob').style.display = 'none';
    document.getElementById('blurbsMob').style.display = 'none';
    document.getElementById('logoTableMob').style.display = 'none';
    document.getElementById('likesMob').style.display = 'none';
    document.getElementById('critsMob').style.display = 'none';
    document.getElementById('ideasMob').style.display = 'none';
    document.getElementById('qsMob').style.display = 'none';  
    document.getElementById('dividerMobResearch').style.display = 'none';
  // Research 2
    document.getElementById('research2Mob').style.display = 'none';
    document.getElementById('dividerMobResearch2').style.display = 'none';
    document.getElementById('affinityMob').style.display = 'none';
    document.getElementById('graphMob1').style.display = 'none';
    document.getElementById('graphMob2').style.display = 'none';
    document.getElementById('dividerResearchMob3').style.display = 'none';
  // Research 3
    document.getElementById('userIntMob').style.display = 'none';
    document.getElementById('objectiveMob').style.display = 'none';
    document.getElementById('userQsMob').style.display = 'none';
    document.getElementById('stringMob').style.display = 'none';
    document.getElementById('personasMob').style.display = 'none';
    document.getElementById('personButtonMob').style.display = 'none';
    document.getElementById('dividerMobResearch3').style.display; 'none';
  //  Define

}

function toTestMob () {   

  document.getElementById('chevronToIntro').style.backgroundColor = '#f27797';
  document.getElementById('chevronToResearch').style.backgroundColor = '#f16589';
  document.getElementById('chevronToDefine').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToIdeate').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToPrototype').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToTest').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToFinale').style.backgroundColor = '#1A1A1A';

  document.getElementById('chevvyMob').scrollIntoView();
  document.getElementById('defineMob').style.display = 'none';
  document.getElementById('ideateMob').style.display = 'none';
  document.getElementById('prototypeMob').style.display = 'none';
  document.getElementById('testMob').style.display = 'inline';
  document.getElementById('finaleMob').style.display = 'none';


  // Nav bar
  document.getElementById('chevronToIntroMob').style.backgroundColor = '#f27797';
  document.getElementById('chevronToResearchMob').style.backgroundColor = '#f16589';
  document.getElementById('chevronToDefineMob').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToIdeateMob').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToPrototypeMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToTestMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToFinaleMob').style.backgroundColor = '#1A1A1A';

  // Intro
    document.getElementById('introMob').style.display = 'none';  
    document.getElementById('dividerMobIntro').style.display = 'none';
  // Research
    document.getElementById('researchMob').style.display = 'none';  
    document.getElementById('shouldersMob').style.display = 'none';
    document.getElementById('compMob').style.display = 'none';
    document.getElementById('blurbsMob').style.display = 'none';
    document.getElementById('logoTableMob').style.display = 'none';
    document.getElementById('likesMob').style.display = 'none';
    document.getElementById('critsMob').style.display = 'none';
    document.getElementById('ideasMob').style.display = 'none';
    document.getElementById('qsMob').style.display = 'none';  
    document.getElementById('dividerMobResearch').style.display = 'none';
  // Research 2
    document.getElementById('research2Mob').style.display = 'none';
    document.getElementById('dividerMobResearch2').style.display = 'none';
    document.getElementById('affinityMob').style.display = 'none';
    document.getElementById('graphMob1').style.display = 'none';
    document.getElementById('graphMob2').style.display = 'none';
    document.getElementById('dividerResearchMob3').style.display = 'none';
  // Research 3
    document.getElementById('userIntMob').style.display = 'none';
    document.getElementById('objectiveMob').style.display = 'none';
    document.getElementById('userQsMob').style.display = 'none';
    document.getElementById('stringMob').style.display = 'none';
    document.getElementById('personasMob').style.display = 'none';
    document.getElementById('personButtonMob').style.display = 'none';
    document.getElementById('dividerMobResearch3').style.display; 'none';
  //  Define
}

function toFinaleMob () {   

  document.getElementById('chevvyMob').scrollIntoView();

  document.getElementById('defineMob').style.display = 'none';
  document.getElementById('ideateMob').style.display = 'none';
  document.getElementById('prototypeMob').style.display = 'none';
  document.getElementById('testMob').style.display = 'none';
  document.getElementById('finaleMob').style.display = 'inline';
  // Navbar
  document.getElementById('chevronToIntroMob').style.backgroundColor = '#f489a4';
  document.getElementById('chevronToResearchMob').style.backgroundColor = '#f27797';
  document.getElementById('chevronToDefineMob').style.backgroundColor = '#f16589';
  document.getElementById('chevronToIdeateMob').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToPrototypeMob').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToTestMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToFinaleMob').style.backgroundColor = '#ea1d52';

  // Intro
    document.getElementById('introMob').style.display = 'none';  
    document.getElementById('dividerMobIntro').style.display = 'none';
  // Research
    document.getElementById('researchMob').style.display = 'none';  
    document.getElementById('shouldersMob').style.display = 'none';
    document.getElementById('compMob').style.display = 'none';
    document.getElementById('blurbsMob').style.display = 'none';
    document.getElementById('logoTableMob').style.display = 'none';
    document.getElementById('likesMob').style.display = 'none';
    document.getElementById('critsMob').style.display = 'none';
    document.getElementById('ideasMob').style.display = 'none';
    document.getElementById('qsMob').style.display = 'none';  
    document.getElementById('dividerMobResearch').style.display = 'none';
  // Research 2
    document.getElementById('research2Mob').style.display = 'none';
    document.getElementById('dividerMobResearch2').style.display = 'none';
    document.getElementById('affinityMob').style.display = 'none';
    document.getElementById('graphMob1').style.display = 'none';
    document.getElementById('graphMob2').style.display = 'none';
    document.getElementById('dividerResearchMob3').style.display = 'none';
  // Research 3
    document.getElementById('userIntMob').style.display = 'none';
    document.getElementById('objectiveMob').style.display = 'none';
    document.getElementById('userQsMob').style.display = 'none';
    document.getElementById('stringMob').style.display = 'none';
    document.getElementById('personasMob').style.display = 'none';
    document.getElementById('personButtonMob').style.display = 'none';
    document.getElementById('dividerMobResearch3').style.display; 'none';
  //  Define
}


// DIARY STUDY MUSIC EXPERIENCES DESKTOP

// nav color palette  (dark to light)

// #ea1d52 
// #ec2f5f
// #ed416d
// #ef537b
// #f16589
// #f27797
// #f489a4

function toIntroD() {
  document.getElementById('chevvy').scrollIntoView();
  document.getElementById('introD').style.display = "inline";
 document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('dataSynthD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";
  
  document.getElementById('chevronToIntroD').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToPlanningD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataCoD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataAlD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataSynthD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionD').style.backgroundColor = '#1A1A1A';

 

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";
  
}

function toPlanningD() {
  document.getElementById('chevvy').scrollIntoView();
  document.getElementById('planningD').style.display = "inline";
  document.getElementById('chevronToPlanningD').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToDataCoD').style.backgroundColor = '#1A1A1A';

  document.getElementById('chevronToIntroD').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToDataAlD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataSynthD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionD').style.backgroundColor = '#1A1A1A';
  
  document.getElementById('introD').style.display = "none";

  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('dataSynthD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";
}

function toDataCoD() {
  document.getElementById('chevvy').scrollIntoView();
  document.getElementById('dataCoD').style.display = "inline";

  document.getElementById('chevronToIntroD').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToPlanningD').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToDataCoD').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToDataAlD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataSynthD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionD').style.backgroundColor = '#1A1A1A';
  
  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('dataSynthD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";
  
  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";
}

function toDataAlD() {
  document.getElementById('chevvy').scrollIntoView();
  document.getElementById('dataAlD').style.display = "inline";
  document.getElementById('chevronToDataAlD').style.backgroundColor = '#ea1d52';

  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataSynthD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";

  document.getElementById('chevronToIntroD').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToPlanningD').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToDataCoD').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToDataSynthD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionD').style.backgroundColor = '#1A1A1A';
  
 
  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";
}

function toDataSynthD() {
  document.getElementById('chevvy').scrollIntoView();
  document.getElementById('dataSynthD').style.display = "inline";
    document.getElementById('chevronToDataSynthD').style.backgroundColor = '#ea1d52';

  document.getElementById('chevronToDataAlD').style.backgroundColor = '#ec2f5f';

  document.getElementById('chevronToIntroD').style.backgroundColor = '#f16589';
  document.getElementById('chevronToPlanningD').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToDataCoD').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToExpandingD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionD').style.backgroundColor = '#1A1A1A';
  
  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').style.display = "none";

  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";
}

function toExpandingD() {
  document.getElementById('chevvy').scrollIntoView();
  document.getElementById('expandingD').style.display = "inline";
  document.getElementById('chevronToExpandingD').style.backgroundColor = '#ea1d52';

  document.getElementById('chevronToIntroD').style.backgroundColor = '#f27797';
  document.getElementById('chevronToPlanningD').style.backgroundColor = '#f16589';
  document.getElementById('chevronToDataCoD').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToDataAlD').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToDataSynthD').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToReflectionD').style.backgroundColor = '#1A1A1A';
  
  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('dataSynthD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";
}

function toReflectionD() {
  document.getElementById('chevvy').scrollIntoView();
  document.getElementById('reflectionD').style.display = "inline";

  document.getElementById('chevronToIntroD').style.backgroundColor = '#f489a4';
  document.getElementById('chevronToPlanningD').style.backgroundColor = '#f27797';
  document.getElementById('chevronToDataCoD').style.backgroundColor = '#f16589';
  document.getElementById('chevronToDataAlD').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToDataSynthD').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToExpandingD').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToReflectionD').style.backgroundColor = '#ea1d52';
  
  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('dataSynthD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";
}


// DIARY STUDY MUSIC EXPERIENCES MOBILE

// Dark to light chevrons
// #ea1d52 
// #ec2f5f
// #ed416d
// #ef537b
// #f16589
// #f27797
// #f489a4



function toIntroD() {
  document.getElementById('chevvy').scrollIntoView();
  document.getElementById('introD').style.display = "inline";

  document.getElementById('chevronToIntroDMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToPlanningDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataCoDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataAlDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionDMob').style.backgroundColor = '#1A1A1A';

  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('dataSynthD').style.display = "none";

  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('dataSynthDMob').display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dividerMobPlanningD').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";


}

function toIntroDMob() {
  document.getElementById('chevvyMob').scrollIntoView();

  document.getElementById('chevronToIntroDMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToPlanningDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataCoDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataAlDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionDMob').style.backgroundColor = '#1A1A1A';

  document.getElementById('introDMob').style.display = "inline";
  document.getElementById('dataSynthDMob').display = "none";

  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dividerMobPlanningD').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";

  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";
}


function toPlanningD() {
  document.getElementById('chevvy').scrollIntoView();

  document.getElementById('planningD').style.display = "inline";

  document.getElementById('chevronToPlanningD').style.backgroundColor = '#ea1d52';
  document.getElementById('introD').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('dataSynthD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";

  document.getElementById('chevronToIntroDMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToDataCoDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataAlDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionDMob').style.backgroundColor = '#1A1A1A';

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";



}

function toPlanningDMob() {
  document.getElementById('chevvyMob').scrollIntoView();
  document.getElementById('planningDMob').style.display = "inline";

  document.getElementById('chevronToIntroDMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToPlanningDMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToDataCoDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToDataAlDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionDMob').style.backgroundColor = '#1A1A1A';

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";

  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";

}

function toDataCoD() {
  document.getElementById('chevvy').scrollIntoView();
  document.getElementById('dataCoD').style.display = "inline";

  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('dataSynthD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";

  document.getElementById('chevronToIntroD').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToPlanningD').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToDataCoD').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToDataAlD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingD').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionD').style.backgroundColor = '#1A1A1A';

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";

 
}

function toDataCoDMob() {
  document.getElementById('chevvyMob').scrollIntoView();

  document.getElementById('chevronToIntroDMob').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToPlanningDMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToDataCoDMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToDataAlDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToExpandingDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionDMob').style.backgroundColor = '#1A1A1A';

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "inline";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";

  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";
}

function toDataAlDMob() {
  document.getElementById('chevvyMob').scrollIntoView();

  document.getElementById('chevronToIntroDMob').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToPlanningDMob').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToDataCoDMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToDataAlDMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToExpandingDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionDMob').style.backgroundColor = '#1A1A1A';

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "inline";
  document.getElementById('dataSynthDMob').display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";

  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";
}

function toDataSynthDMob() {  
   document.getElementById('chevvyMob').scrollIntoView();

  document.getElementById('dataSynthDMob').display = "inline";

  document.getElementById('chevronToIntroDMob').style.backgroundColor = '#f16589';
  document.getElementById('chevronToPlanningDMob').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToDataCoDMob').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToDataAlDMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToDataSynthDMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToExpandingDMob').style.backgroundColor = '#1A1A1A';
  document.getElementById('chevronToReflectionDMob').style.backgroundColor = '#1A1A1A';


  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "none";
  document.getElementById('reflectionDMob').style.display = "none";

  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";
}

function toExpandingDMob() {
  document.getElementById('chevvyMob').scrollIntoView();

  document.getElementById('chevronToIntroDMob').style.backgroundColor = '#f16589';
  document.getElementById('chevronToPlanningDMob').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToDataCoDMob').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToDataAlDMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToExpandingDMob').style.backgroundColor = '#ea1d52';
  document.getElementById('chevronToReflectionDMob').style.backgroundColor = '#1A1A1A';

  document.getElementById('dataSynthDMob').display = "none";

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('expandingDMob').style.display = "inline";
  document.getElementById('reflectionDMob').style.display = "none";

  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";
}

function toReflectionDMob() {
  document.getElementById('chevvyMob').scrollIntoView();
  document.getElementById('reflectionDMob').style.display = "inline";

  document.getElementById('chevronToIntroDMob').style.backgroundColor = '#f27797';
  document.getElementById('chevronToPlanningDMob').style.backgroundColor = '#f16589';
  document.getElementById('chevronToDataCoDMob').style.backgroundColor = '#ef537b';
  document.getElementById('chevronToDataAlDMob').style.backgroundColor = '#ed416d';
  document.getElementById('chevronToExpandingDMob').style.backgroundColor = '#ec2f5f';
  document.getElementById('chevronToReflectionDMob').style.backgroundColor = '#ea1d52';

  document.getElementById('introDMob').style.display = "none";
  document.getElementById('planningDMob').style.display = "none";
  document.getElementById('dataCoDMob').style.display = "none";
  document.getElementById('dataAlDMob').style.display = "none";
  document.getElementById('dataSynthDMob').display = "none";
  document.getElementById('expandingDMob').style.display = "none";

  document.getElementById('introD').style.display = "none";
  document.getElementById('planningD').style.display = "none";
  document.getElementById('dataCoD').style.display = "none";
  document.getElementById('dataAlD').style.display = "none";
  document.getElementById('expandingD').style.display = "none";
  document.getElementById('reflectionD').style.display = "none";
}

// Persona Display

// function persona1() {
//   document.getElementById('persona1').style.display = "inline";
//   document.getElementById('persona1').scrollIntoView();

// }

function outie() {
  document.getElementById('persona1').style.display = 'none';
  document.getElementById('personaScroll').scrollIntoView();
}


// HAMBURGER MENU ICON
  // creating the rotating effect

$(document).ready(function () {
  $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });
});
$(document).ready(function () {
// Bubbles exit on click
    $("#liButton ").click(function(){
    // $('.bubbleContainer').toggleClass('bubbleContainerExit');
    $(console.log("hihihi"));
  });
});

// Open navbar
$(document).ready(function () {
  $('.first-button').on('click', function () {
    $('.navOpen').toggleClass('clicked');
  });
});

$(document).ready(function () {
  $('#contact').on('click', function () {
    $('.contactBubble').toggleClass('clicked');
  });
});

//Navbar 

function contact() {
  document.getElementById('contactBubble').scrollTo(0,document.body.scrollHeight);
}

$(function () {
  $(document).scroll(function(){
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
  $(document).scroll(function(){
    var $nav = $("#logo");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
  $(document).scroll(function(){
    var $nav = $("li.nav-item");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
  $(document).scroll(function(){
    var $nav = $("#animated-icon1 span");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  })
})

// Nav item scroll behaviour

function about() {
  document.getElementById("downArrow").scrollIntoView();
}

function projects() {
  document.getElementById("projects").scrollIntoView();
}

function contact() {
  document.getElementById("theFOOT").scrollIntoView();
  document.getElementById("theFOOT").scrollIntoView();
}

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

// Feedback Grid (6 apps)

function mediSafe() {
  document.getElementById('mediSafeBlurb').style.backgroundImage = "url(images/mediSafeBlurb.png)";
  document.getElementById('mediSafeBlurb').scrollIntoView();
  document.getElementById('likes').style.backgroundImage = "url(images/LIKES.png)";
  document.getElementById('crits').style.backgroundImage = "url(images/CRITS.png)";
  document.getElementById('qs').style.backgroundImage = "url(images/QS.png)";
  document.getElementById('ideas').style.backgroundImage = "url(images/IDEAS.png)";

}

function daylio() {
  document.getElementById('mediSafeBlurb').style.backgroundImage = "url(images/daylioBlurb.png)";
  document.getElementById('mediSafeBlurb').scrollIntoView();
  document.getElementById('likes').style.backgroundImage = "url(images/daylioLikes.png)";
  document.getElementById('crits').style.backgroundImage = "url(images/daylioCrits.png)";
  document.getElementById('qs').style.backgroundImage = "url(images/daylioQs.png)";
  document.getElementById('ideas').style.backgroundImage = "url(images/daylioIdeas.png)";
}

function round() {
  document.getElementById('mediSafeBlurb').style.backgroundImage = "url(images/roundBlurb.png)";
  document.getElementById('mediSafeBlurb').scrollIntoView();
  document.getElementById('likes').style.backgroundImage = "url(images/roundLikes.png)";
  document.getElementById('crits').style.backgroundImage = "url(images/roundCrits.png)";
  document.getElementById('qs').style.backgroundImage = "url(images/roundQs.png)";
  document.getElementById('ideas').style.backgroundImage = "url(images/roundIdeas.png)";
}

function reflectly() {
  document.getElementById('mediSafeBlurb').style.backgroundImage = "url(images/reflectlyBlurb.png)";
  document.getElementById('mediSafeBlurb').scrollIntoView();
  document.getElementById('likes').style.backgroundImage = "url(images/reflectlyLikes.png)";
  document.getElementById('crits').style.backgroundImage = "url(images/reflectlyCrits.png)";
  document.getElementById('qs').style.backgroundImage = "url(images/reflectlyQs.png)";
  document.getElementById('ideas').style.backgroundImage = "url(images/reflectlyIdeas.png)";
}

function medHelper() {
  document.getElementById('mediSafeBlurb').style.backgroundImage = "url(images/medHelperBlurb.png)";
  document.getElementById('mediSafeBlurb').scrollIntoView();
  document.getElementById('likes').style.backgroundImage = "url(images/medHelperLikes.png)";
  document.getElementById('crits').style.backgroundImage = "url(images/medHelperCrits.png)";
  document.getElementById('qs').style.backgroundImage = "url(images/medHelperQs.png)";
  document.getElementById('ideas').style.backgroundImage = "url(images/medHelperIdeas.png)";
}

function eMoods() {
  document.getElementById('mediSafeBlurb').style.backgroundImage = "url(images/eMoodsBlurb.png)";
  document.getElementById('mediSafeBlurb').scrollIntoView();
  document.getElementById('likes').style.backgroundImage = "url(images/eMoodsLikes.png)";
  document.getElementById('crits').style.backgroundImage = "url(images/eMoodsCrits.png)";
  document.getElementById('qs').style.backgroundImage = "url(images/eMoodsQs.png)";
  document.getElementById('ideas').style.backgroundImage = "url(images/eMoodsIdeas.png)";
}


// GRID DATA SWITCH

function usability() {  
  document.getElementById('gridFeedback').scrollIntoView();
  document.getElementById('usability').style.backgroundColor = "#10ac84";
  document.getElementById('aesthetics').style.backgroundColor = "transparent";
  document.getElementById('helpFeatures').style.backgroundColor = "transparent";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('demographics').style.backgroundColor = "transparent";
  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";


  // document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Apps that featured positive usability gave power to the user; these designs afforded users with the opportunity to correct mistakes (e.g. accidental button presses) and were laid out in an intuitive, efficient manner. <br> <br> <!-- criticisms -->  My data, however, reveals a relatively high proportion of usability issues in contrast to positive user experiences. The most notable criticism that emerged during my analysis was the amount of time and effort it took to use certain apps (particularly those involving medication). Whether it was due to poor structural design, vague instructions, or non-skippable animations, these applications seemed to risk leaving users frustrated during the navigation process. <br> <br> <!-- questions --> Expanding on the notion of poor structural design-- many questions arose regarding the layout and function of app elements. For instance, some applications featured an overwhelming number of home screen buttons, potentially leaving users uncertain of which option to prioritize. Further, certain elements did not carry out their tagged functions (e.g. edit feature on journal does not work > user must re-submit entire entry to include missed data), signalling questions surrounding the usability of the written code.  <br> <br> <!-- ideas --> In terms of fixing usability errors, several ideas come to mind: designers can ensure that homescreens are evident and accessible to the user by chunking priority items into 3-4 categories, developers can make data entry more interactive so that users don't feel as though they are filling out paperwork in a clinic, and--importantly-- always give the user power to skip through undesired sections of text or animation. Time is precious; designers must respect this.  ";
}

function aesthetics() {
  document.getElementById('gridFeedback').scrollIntoView();
  document.getElementById('usability').style.backgroundColor = "transparent";
  document.getElementById('aesthetics').style.backgroundColor = "#10ac84";
  document.getElementById('helpFeatures').style.backgroundColor = "transparent";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('demographics').style.backgroundColor = "transparent";
  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";


  // document.getElementById('gridFeedback').innerHTML = "<!-- likes --> My collective data indicates that app aesthetics were generally pleasant. Applications varied in visual design, but those that were most memorable used playful microinteractions, intuitive graphs, and minimalistic yet attention-capturing user interfaces.   <br> <br> <!-- criticisms -->  Naturally, some applications were not as immaculate as others. Criticisms arose as I noted evidence of inconsistent and lacklustre user interfaces. For example, certain apps failed to maintain consistent styling across pages, and others left large containers of white space in lieu of playful designs.  <br> <br> <!-- questions --> After reviewing my data related to aesthetics, I wondered how designers could use colour to make viewing data more intuitive. Several apps featured graphs on their homescreens, but some seemed to feature too many colours without an accessible legend, and others used single colour themes, dividing data into separate categories (and thus, many graphs to evaluate). How might designers use colour to signal meaning to users in a cohesive way?  <br> <br> <!-- ideas --> In order to maintain high level aesthetics, designers might consider the following: instead of using white space, design HTML cards with subtle border outlines to separate user entries, use icons and images to brighten up the user interface, keep the style of each screen relatively the same. ";
}

function helpFeatures() {
  document.getElementById('gridFeedback').scrollIntoView();
  document.getElementById('usability').style.backgroundColor = "transparent";
  document.getElementById('aesthetics').style.backgroundColor = "transparent";
  document.getElementById('helpFeatures').style.backgroundColor = "#10ac84";
  document.getElementById('purposeDesign').style.backgroundColor = "transparent";
  document.getElementById('aversiveUX').style.backgroundColor = "transparent";
  document.getElementById('joyfulUX').style.backgroundColor = "transparent";
  document.getElementById('medAdherence').style.backgroundColor = "transparent";
  document.getElementById('demographics').style.backgroundColor = "transparent";
  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";

//  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> I was happy to see that many of my research notes fell under the category of “helpful features”. Most notably, I admired how comprehensive some of the applications' tracking systems were; certain apps allowed users to submit health data related to mood, exercise, sleep, medication, and more. Advanced applications even provided users with the opportunity to sync their physiological data using wearable technology. Other helpful features included search filters that outputted correlations between variables of interest (e.g. how mood relates to spending time with friends), customizable goal setting and habit tracking, as well as educational resources. <br> <br> <!-- ideas --> As you can see based on the distrubution of variables above, these positive features inspired an even larger number of ideas. Designers may consider the following: expanding and improving the design of the filter search (e.g. revealing correlations between mood, medication, and activity level, crafting a comprehensive and empirically based mood rating system, creating smart algorithms that alert the user when their mood reveals concerning patterns, providing meaningful journal prompts, providing users with weekly wellness reports, and educating users about mood, medication and more). ";
}

function purposeDesign() {
  document.getElementById('gridFeedback').scrollIntoView();
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
  document.getElementById('gridFeedback').scrollIntoView();
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
  document.getElementById('gridFeedback').scrollIntoView();
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
  document.getElementById('gridFeedback').scrollIntoView();
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
  document.getElementById('gridFeedback').scrollIntoView();
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

// Grid Diary Switch Mobile

function usabilityMob() {  
  document.getElementById('gridFeedbackMob').scrollIntoView();
  document.getElementById('usabilityMob').style.backgroundColor = "#10ac84";
  document.getElementById('aestheticsMob').style.backgroundColor = "transparent";
  document.getElementById('helpFeaturesMob').style.backgroundColor = "transparent";
  document.getElementById('purposeDesignMob').style.backgroundColor = "transparent";
  document.getElementById('aversiveUXMob').style.backgroundColor = "transparent";
  document.getElementById('joyfulUXMob').style.backgroundColor = "transparent";
  document.getElementById('medAdherenceMob').style.backgroundColor = "transparent";
  document.getElementById('demographicsMob').style.backgroundColor = "transparent";
  document.getElementById('gridFeedbackMob').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";


  // document.getElementById('gridFeedback').innerHTML = "<!-- likes --> Apps that featured positive usability gave power to the user; these designs afforded users with the opportunity to correct mistakes (e.g. accidental button presses) and were laid out in an intuitive, efficient manner. <br> <br> <!-- criticisms -->  My data, however, reveals a relatively high proportion of usability issues in contrast to positive user experiences. The most notable criticism that emerged during my analysis was the amount of time and effort it took to use certain apps (particularly those involving medication). Whether it was due to poor structural design, vague instructions, or non-skippable animations, these applications seemed to risk leaving users frustrated during the navigation process. <br> <br> <!-- questions --> Expanding on the notion of poor structural design-- many questions arose regarding the layout and function of app elements. For instance, some applications featured an overwhelming number of home screen buttons, potentially leaving users uncertain of which option to prioritize. Further, certain elements did not carry out their tagged functions (e.g. edit feature on journal does not work > user must re-submit entire entry to include missed data), signalling questions surrounding the usability of the written code.  <br> <br> <!-- ideas --> In terms of fixing usability errors, several ideas come to mind: designers can ensure that homescreens are evident and accessible to the user by chunking priority items into 3-4 categories, developers can make data entry more interactive so that users don't feel as though they are filling out paperwork in a clinic, and--importantly-- always give the user power to skip through undesired sections of text or animation. Time is precious; designers must respect this.  ";
}

function aestheticsMob() {
  document.getElementById('gridFeedbackMob').scrollIntoView();
  document.getElementById('usabilityMob').style.backgroundColor = "transparent";
  document.getElementById('aestheticsMob').style.backgroundColor = "#10ac84";
  document.getElementById('helpFeaturesMob').style.backgroundColor = "transparent";
  document.getElementById('purposeDesignMob').style.backgroundColor = "transparent";
  document.getElementById('aversiveUXMob').style.backgroundColor = "transparent";
  document.getElementById('joyfulUXMob').style.backgroundColor = "transparent";
  document.getElementById('medAdherenceMob').style.backgroundColor = "transparent";
  document.getElementById('demographicsMob').style.backgroundColor = "transparent";
  document.getElementById('gridFeedbackMob').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";


  // document.getElementById('gridFeedback').innerHTML = "<!-- likes --> My collective data indicates that app aesthetics were generally pleasant. Applications varied in visual design, but those that were most memorable used playful microinteractions, intuitive graphs, and minimalistic yet attention-capturing user interfaces.   <br> <br> <!-- criticisms -->  Naturally, some applications were not as immaculate as others. Criticisms arose as I noted evidence of inconsistent and lacklustre user interfaces. For example, certain apps failed to maintain consistent styling across pages, and others left large containers of white space in lieu of playful designs.  <br> <br> <!-- questions --> After reviewing my data related to aesthetics, I wondered how designers could use colour to make viewing data more intuitive. Several apps featured graphs on their homescreens, but some seemed to feature too many colours without an accessible legend, and others used single colour themes, dividing data into separate categories (and thus, many graphs to evaluate). How might designers use colour to signal meaning to users in a cohesive way?  <br> <br> <!-- ideas --> In order to maintain high level aesthetics, designers might consider the following: instead of using white space, design HTML cards with subtle border outlines to separate user entries, use icons and images to brighten up the user interface, keep the style of each screen relatively the same. ";
}

function helpFeaturesMob() {
  document.getElementById('gridFeedbackMob').scrollIntoView();
  document.getElementById('usabilityMob').style.backgroundColor = "transparent";
  document.getElementById('aestheticsMob').style.backgroundColor = "transparent";
  document.getElementById('helpFeaturesMob').style.backgroundColor = "#10ac84";
  document.getElementById('purposeDesignMob').style.backgroundColor = "transparent";
  document.getElementById('aversiveUXMob').style.backgroundColor = "transparent";
  document.getElementById('joyfulUXMob').style.backgroundColor = "transparent";
  document.getElementById('medAdherenceMob').style.backgroundColor = "transparent";
  document.getElementById('demographicsMob').style.backgroundColor = "transparent";
  document.getElementById('gridFeedbackMob').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";

//  document.getElementById('gridFeedback').innerHTML = "<!-- likes --> I was happy to see that many of my research notes fell under the category of “helpful features”. Most notably, I admired how comprehensive some of the applications' tracking systems were; certain apps allowed users to submit health data related to mood, exercise, sleep, medication, and more. Advanced applications even provided users with the opportunity to sync their physiological data using wearable technology. Other helpful features included search filters that outputted correlations between variables of interest (e.g. how mood relates to spending time with friends), customizable goal setting and habit tracking, as well as educational resources. <br> <br> <!-- ideas --> As you can see based on the distrubution of variables above, these positive features inspired an even larger number of ideas. Designers may consider the following: expanding and improving the design of the filter search (e.g. revealing correlations between mood, medication, and activity level, crafting a comprehensive and empirically based mood rating system, creating smart algorithms that alert the user when their mood reveals concerning patterns, providing meaningful journal prompts, providing users with weekly wellness reports, and educating users about mood, medication and more). ";
}

function purposeDesignMob() {
  document.getElementById('gridFeedbackMob').scrollIntoView();
  document.getElementById('usabilityMob').style.backgroundColor = "transparent";
  document.getElementById('aestheticsMob').style.backgroundColor = "transparent";
  document.getElementById('helpFeaturesMob').style.backgroundColor = "transparent";
  document.getElementById('purposeDesignMob').style.backgroundColor = "#10ac84";
  document.getElementById('aversiveUXMob').style.backgroundColor = "transparent";
  document.getElementById('joyfulUXMob').style.backgroundColor = "transparent";
  document.getElementById('medAdherenceMob').style.backgroundColor = "transparent";
  document.getElementById('demographicsMob').style.backgroundColor = "transparent";

  document.getElementById('gridFeedbackMob').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
}

function aversiveUXMob() {
  document.getElementById('gridFeedbackMob').scrollIntoView();
  document.getElementById('usabilityMob').style.backgroundColor = "transparent";
  document.getElementById('aestheticsMob').style.backgroundColor = "transparent";
  document.getElementById('helpFeaturesMob').style.backgroundColor = "transparent";
  document.getElementById('purposeDesignMob').style.backgroundColor = "transparent";
  document.getElementById('aversiveUXMob').style.backgroundColor = "#10ac84";
  document.getElementById('joyfulUXMob').style.backgroundColor = "transparent";
  document.getElementById('medAdherenceMob').style.backgroundColor = "transparent";
  document.getElementById('dempgraphicsMob').style.backgroundColor = "transparent";

  document.getElementById('gridFeedbackMob').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
}

function joyfulUXMob() {
  document.getElementById('gridFeedbackMob').scrollIntoView();
  document.getElementById('usabilityMob').style.backgroundColor = "transparent";
  document.getElementById('aestheticsMob').style.backgroundColor = "transparent";
  document.getElementById('helpFeaturesMob').style.backgroundColor = "transparent";
  document.getElementById('purposeDesignMob').style.backgroundColor = "transparent";
  document.getElementById('aversiveUXMob').style.backgroundColor = "transparent";
  document.getElementById('joyfulUXMob').style.backgroundColor = "#10ac84";
  document.getElementById('medAdherenceMob').style.backgroundColor = "transparent";
  document.getElementById('dempgraphicsMob').style.backgroundColor = "transparent";

  document.getElementById('gridFeedbackMob').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
}

function medAdherenceMob() {
  document.getElementById('gridFeedbackMob').scrollIntoView();
  document.getElementById('usabilityMob').style.backgroundColor = "transparent";
  document.getElementById('aestheticsMob').style.backgroundColor = "transparent";
  document.getElementById('helpFeaturesMob').style.backgroundColor = "transparent";
  document.getElementById('purposeDesignMob').style.backgroundColor = "transparent";
  document.getElementById('aversiveUXMob').style.backgroundColor = "transparent";
  document.getElementById('joyfulUXMob').style.backgroundColor = "transparent";
  document.getElementById('medAdherenceMob').style.backgroundColor = "#10ac84";
  document.getElementById('dempgraphicsMob').style.backgroundColor = "transparent";

  document.getElementById('gridFeedbackMob').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
}

function demographicsMob() {
  document.getElementById('gridFeedbackMob').scrollIntoView();
  document.getElementById('usabilityMob').style.backgroundColor = "transparent";
  document.getElementById('aestheticsMob').style.backgroundColor = "transparent";
  document.getElementById('helpFeaturesMob').style.backgroundColor = "transparent";
  document.getElementById('purposeDesignMob').style.backgroundColor = "transparent";
  document.getElementById('aversiveUXMob').style.backgroundColor = "transparent";
  document.getElementById('joyfulUXMob').style.backgroundColor = "transparent";
  document.getElementById('medAdherenceMob').style.backgroundColor = "transparent";
  document.getElementById('demographicsMob').style.backgroundColor = "#10ac84";

  document.getElementById('gridFeedbackMob').innerHTML = "<!-- likes --> Text Here  <br> <br> <!-- criticisms -->   Text Here. <br> <br> <!-- questions --> Text here.  <br> <br> <!-- ideas --> Text Here. ";
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

$(document.body).on('chevvyMob', onScroll); // for mobile
$(window).on('scroll', onScroll); 

// callback
function onScroll(){ 
    if( $(window).scrollTop() + window.innerHeight >= document.body.scrollHeight ) { 
        track_page++; 
        load_contents(track_page);

    } 
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

  function turnPink1Mob () {
    document.getElementById('col1Mob').style.backgroundColor = "#ef537b";
    document.getElementById('col2Mob').style.backgroundColor = "transparent";
    document.getElementById('col3Mob').style.backgroundColor = "transparent";
    document.getElementById('col4Mob').style.backgroundColor = "transparent";
    document.getElementById('col5Mob').style.backgroundColor = "transparent";
  
    document.getElementById('paragraphMob').innerHTML = '<br> Many of our participants voiced a predilection for applications that compute music suggestions based on existing libraries. Such a feature could save time for users wanting to access familiar music without mental exertion. Companies thus may benefit from strengthening the scope and validity of their suggestive algorithms.';
    }

function turnPink2 () {
  document.getElementById('col2').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> Our participants repeatedly expressed displeasure with the amount of data required to download and stream music. They also commented that after downloading songs, they were disappointed to see that their music was unavailable once outside of internet range. To meet modern user needs, streaming services might consider designing a more data-friendly offline experience.';
}


function turnPink2Mob () {
  document.getElementById('col2Mob').style.backgroundColor = "#ef537b";
  document.getElementById('col1Mob').style.backgroundColor = "transparent";
  document.getElementById('col3Mob').style.backgroundColor = "transparent";
  document.getElementById('col4Mob').style.backgroundColor = "transparent";
  document.getElementById('col5Mob').style.backgroundColor = "transparent";

  document.getElementById('paragraphMob').innerHTML = '<br> Our participants repeatedly expressed displeasure with the amount of data required to download and stream music. They also commented that after downloading songs, they were disappointed to see that their music was unavailable once outside of internet range. To meet modern user needs, streaming services might consider designing a more data-friendly offline experience.';
}

function turnPink3 () {
  document.getElementById('col3').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> There was a relatively equal division of time spent listening to music in the morning and at night (44.4% and 55.6%, respectively). Interestingly, not one participant chose the third option we provided--listening in the afternoon. Under the assumption that our users follow relatively conventional lifestyles (i.e. they face obligations from approximately 9:00 am - 5:00 pm), this finding might be reflective of a tendency for users to listen to music when they have alone time.  ';
}

function turnPink3Mob () {
  document.getElementById('col3Mob').style.backgroundColor = "#ef537b";
  document.getElementById('col1Mob').style.backgroundColor = "transparent";
  document.getElementById('col2Mob').style.backgroundColor = "transparent";
  document.getElementById('col4Mob').style.backgroundColor = "transparent";
  document.getElementById('col5Mob').style.backgroundColor = "transparent";

  document.getElementById('paragraphMob').innerHTML = '<br> There was a relatively equal division of time spent listening to music in the morning and at night (44.4% and 55.6%, respectively). Interestingly, not one participant chose the third option we provided--listening in the afternoon. Under the assumption that our users follow relatively conventional lifestyles (i.e. they face obligations from approximately 9:00 am - 5:00 pm), this finding might be reflective of a tendency for users to listen to music when they have alone time.  ';
}

function turnPink4 () {
  document.getElementById('col4').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> When asked whether our users’ preferred music streaming features affected their mood, 88.9% of respondents answered “yes”. Of this cohort, 77.8% of users reported improvements in mood, while the remaining 11.1% said that their mood had changed for the worse. It’s difficult to know whether the participant whose mood declined was affected by the music itself, or some sort of technical failure on part of their preferred feature. One thing that is clear, however, is that music streaming applications generally serve as a mood booster.   ';
}

function turnPink4Mob () {
  document.getElementById('col4Mob').style.backgroundColor = "#ef537b";
  document.getElementById('col1Mob').style.backgroundColor = "transparent";
  document.getElementById('col2Mob').style.backgroundColor = "transparent";
  document.getElementById('col3Mob').style.backgroundColor = "transparent";
  document.getElementById('col5Mob').style.backgroundColor = "transparent";

  document.getElementById('paragraphMob').innerHTML = '<br> When asked whether our users’ preferred music streaming features affected their mood, 88.9% of respondents answered “yes”. Of this cohort, 77.8% of users reported improvements in mood, while the remaining 11.1% said that their mood had changed for the worse. It’s difficult to know whether the participant whose mood declined was affected by the music itself, or some sort of technical failure on part of their preferred feature. One thing that is clear, however, is that music streaming applications generally serve as a mood booster.   ';
}

function turnPink5 () {
  document.getElementById('col5').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  
  document.getElementById('paragraph').innerHTML = '<br> Users want a feature that quickly recognizes music in their surroundings. <br><br>While applications with this technology surely exist, the feature itself is not typically integrated into popular music streaming services. Perhaps it is not every day that a pleasant song captures our attention, but when the time comes, the ability to quickly access its title and artist appears to be a user need. Imagine if your favourite streaming application was able to accurately decipher, locate and download an outside music source in seconds.<br><br>Users want access to lyrics<br><br>Whether it is to settle a dispute about a line in a song, to sing along, or simply to appreciate the writing of talented artists, some of our users desired access to lyrics as they used their music streaming services. In a generation where rapid access to information has become the norm, it is not surprising to receive such feedback . Music streaming platforms might even benefit from gamifying the process by turning lyrics into an opportunity for mobile karaoke. ';
}


function turnPink5Mob () {
  document.getElementById('col5Mob').style.backgroundColor = "#ef537b";
  document.getElementById('col1Mob').style.backgroundColor = "transparent";
  document.getElementById('col2Mob').style.backgroundColor = "transparent";
  document.getElementById('col3Mob').style.backgroundColor = "transparent";
  document.getElementById('col4Mob').style.backgroundColor = "transparent";
  
  document.getElementById('paragraphMob').innerHTML = '<br> Users want a feature that quickly recognizes music in their surroundings. <br><br>While applications with this technology surely exist, the feature itself is not typically integrated into popular music streaming services. Perhaps it is not every day that a pleasant song captures our attention, but when the time comes, the ability to quickly access its title and artist appears to be a user need. Imagine if your favourite streaming application was able to accurately decipher, locate and download an outside music source in seconds.<br><br>Users want access to lyrics<br><br>Whether it is to settle a dispute about a line in a song, to sing along, or simply to appreciate the writing of talented artists, some of our users desired access to lyrics as they used their music streaming services. In a generation where rapid access to information has become the norm, it is not surprising to receive such feedback . Music streaming platforms might even benefit from gamifying the process by turning lyrics into an opportunity for mobile karaoke. ';
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





// var parallaxElements = $('.parallax'),
//     parallaxQuantity = parallaxElements.length;

// $(window).on('scroll', function () {

//   window.requestAnimationFrame(function () {

//     for (var i = 0; i < parallaxQuantity; i++) {
//       var currentElement =  parallaxElements.eq(i);
//       var scrolled = $(window).scrollTop();
          
//         currentElement.css({
//           'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
//         });
//     }
//   });

// });



