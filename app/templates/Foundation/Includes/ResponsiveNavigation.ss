<div class="show-for-small-only">
    <a class="left-off-canvas-toggle menu-icon" style="background-color: #333333"><span></span></a>
    <nav class="left-off-canvas-menu">
        <ul class="off-canvas-list">
            <% loop $Menu(1) %>
                <li class="$LinkingMode"><a href="$Link" title="$Title.XML">$MenuTitle.XML</a></li>
            <% end_loop %>
        </ul>
    </nav>
</div>