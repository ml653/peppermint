require 'faker'

FactoryGirl.define do
  factory :expense do |f|
    f.user { |g| g.association(:user) }
    f.amount { Faker::Number.decimal(2) }
    f.date { Faker::Date.between(2.days.ago, Date.today) }
    f.description { Faker::HarryPotter.quote }
  end
end
