<nav class="show-for-medium-up">
    <ul class="side-nav">
        <% loop $Menu(1) %>
            <li class="$LinkingMode"><a href="$Link" title="$Title.XML">$MenuTitle.XML</a></li>
        <% end_loop %>
    </ul>
</nav>