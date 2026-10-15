<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use top-level TanStack content routes with a shared header and footer; each leaf defines page-specific metadata so navigation and sharing remain consistent.
- Keep reusable brand styles and semantic tokens in src/styles.css; use the shared Button variants for interactive actions.
- Store estimate requests through the validated public server function and insert-only database access; never expose visitor contact details through public reads.
- Keep unverified company information and generated project imagery clearly identified as samples until supplied by the owner.
