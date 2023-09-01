let user = {
  firstName: 'Daniil', middleName: 'Oleksiyovich', lastName: 'Kremenskyi',
  fullName() { return `${this.lastName} ${this.firstName} ${this.middleName}` },
}

console.log(user.fullName());