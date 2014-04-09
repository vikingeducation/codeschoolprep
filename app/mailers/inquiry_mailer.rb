class InquiryMailer < ActionMailer::Base
  default from: "csp@theodinproject.com"

  def inquiry(inquiry)
    @inquiry = inquiry
    mail(to:"csp@theodinproject.com", :subject => "ACTION REQUIRED: Inquiry to Code School Prep")
  end

end
