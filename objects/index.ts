const profile = {
  myName: 'Hasan',
  age: 23,
  coords: {
    lat: 0,
    lng: 15
  },

  setAge(age: number): void {
    this.age = age
  }
}

// const {myName}:{myName:string} = profile;
const { myName, coords: { lat, lng } }: { myName: string, coords: { lat: number, lng: number } } = profile
