class Sleepisode < ActiveRecord::Base
  validates(:start_sleepiness, :end_sleepiness, {presence: true} )

  belongs_to :users
end
