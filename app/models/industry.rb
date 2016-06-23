class Industry < ActiveRecord::Base
  has_many :companies
  has_many :jobs, through: :companies
end
