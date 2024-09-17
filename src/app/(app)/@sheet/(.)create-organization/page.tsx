import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'

export default function CreateOrganization() {
	return (
		<Sheet open>
			<InterceptedSheetContent>
				<SheetHeader>
					<SheetTitle>Create organization</SheetTitle>
				</SheetHeader>

				<div className="py-4"></div>
			</InterceptedSheetContent>
		</Sheet>
	)
}
