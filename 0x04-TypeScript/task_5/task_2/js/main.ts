interface MajorCredits {
  credits: number,
  brands: 'major'
}

interface MinorCredits {
  credits: number,
  brands: 'minor'
}

const sumMajorCredits = (subject1:MajorCredits , subject2: MajorCredits) => {
  return subject1.credits + subject2.credits;
}

const sumMinorCredits = (subject1:MinorCredits , subject2: MinorCredits) => {
  return subject1.credits + subject2.credits;
}