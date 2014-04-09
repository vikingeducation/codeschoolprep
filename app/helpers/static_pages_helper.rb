module StaticPagesHelper

  def show_inline_error(object, key)
    "<span class='help-inline'>Your #{key} #{object.errors[key].join}</span>".html_safe if object.errors.has_key?(key)
  end

end
