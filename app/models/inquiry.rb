class Inquiry < ActiveRecord::Base

  validates :name, :presence => { :message => "is required" }
  validates :email, :presence => { :message => "is required" }
  validates :comment, :length => { :in => 0..400, :message => "is too long" }

end
