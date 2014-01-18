<div class="small-2 columns">
    <% include Navigation %>
</div>
<div class="small-10 columns main-section">
    <h3>$Title</h3>
    <article>
        <div class="content">$Content</div>
    </article>
    <% if $Form %>
        <div class="row">
            <div class="large-6 small-centered columns">
                $Form
            </div>
        </div>
    <% end_if %>
</div>