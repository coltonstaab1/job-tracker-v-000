class Company < ActiveRecord::Base
  has_many :jobs
  belongs_to :industry

end
