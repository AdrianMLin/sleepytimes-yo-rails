class User < ActiveRecord::Base
  validates(:password, :email, {presence: true} )
  validates :email, :username, {uniqueness: true}


  has_many :sleepisodes, dependent: :destroy
  has_secure_password
end