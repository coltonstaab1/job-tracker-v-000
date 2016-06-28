User.create(name: "Colton", email: "colton@gmail.com", password: "hellocats")
User.create(name: "Matthew", email: "matthew@gmail.com", password: "hikitty")
User.create(name: "Kathy", email: "kathy@gmail.com", password: "iheartdogs")

Industry.create(description: "technology")
Industry.create(description: "finance")
Industry.create(description: "apparel")

Company.create(name:"Apple", industry_id: 1)
Company.create(name:"Google", industry_id: 1)
Company.create(name:"JP Morgan", industry_id: 2)
Company.create(name:"Topman", industry_id: 3)


Job.create(title: "Engineer", city: "Cupertino", state: "CA", description:"Ruby engineer", company_id: 1, salary: 100000)
Job.create(title: "Marketer", city: "San Francisco", state: "CA", description:"Marketing analytics", company_id: 2, salary: 150000
Job.create(title: "Recruiter", city: "Mountain View", state:"CA", description: "Hire the best and brightest talend at Google!", company_id: 2, salary: 50000)
Job.create(title: "Banker", city: "New York City", state: "NY", description: "Come make money out of money!", company_id: 3, salary: 250000)
Job.create(title: "Merchandise Planner", city: "Brooklyn", state: "NY", description: "Help find us the cutest clothes", company_id: 4, salary: 45000)
Job.create(title: "Sales Associate", city: "Easthampton", state: "NY", description: "Sell cute clothes", company_id: 4, salary: 60000)