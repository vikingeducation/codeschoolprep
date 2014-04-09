class InquiriesController < ApplicationController


  def create
    @inquiry = Inquiry.new(inquiry_params)
    if @inquiry.save
      puts "INQUIRY SAVED"
      InquiryMailer.inquiry(@inquiry).deliver!
      flash[:success] = "Thank you for your interest.  We'll be in touch shortly!"
      redirect_to :root
    else
      errors = @inquiry.errors.full_messages
      puts errors.inspect
      puts errors.join(", ").inspect
      flash.now[:error] = "Please correct the following errors with your submission: \n#{errors.join(" and ")}."
      render "static_pages/home"
    end
  end

private

  def inquiry_params
    params.require(:inquiry).permit(:name, :email, :comment)
  end

end
