import { notices, type Notice } from '@/data/notices';

interface NoticeBoardProps {
    maxItems?: number;
    showAll?: boolean;
}

export default function NoticeBoard({ maxItems = 4, showAll = false }: NoticeBoardProps) {
    const displayNotices = showAll ? notices : notices.slice(0, maxItems);

    const categoryColors: Record<Notice['category'], { bg: string; text: string; border: string }> = {
        important: {
            bg: 'bg-red-50',
            text: 'text-red-600',
            border: 'border-red-200 hover:border-red-400',
        },
        academic: {
            bg: 'bg-primary/10',
            text: 'text-primary',
            border: 'border-primary/20 hover:border-primary',
        },
        event: {
            bg: 'bg-secondary/10',
            text: 'text-secondary',
            border: 'border-secondary/20 hover:border-secondary',
        },
        general: {
            bg: 'bg-accent/10',
            text: 'text-accent',
            border: 'border-accent/20 hover:border-accent',
        },
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden border-4 border-dashed border-primary/20">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary/30 rounded-full blur-lg"></div>
            <h3 className="text-2xl font-heading font-bold text-foreground-light mb-6 relative z-10 flex items-center gap-2">
                <span className="text-2xl">📋</span> Notice Board
            </h3>
            <div className="space-y-4 relative z-10">
                {displayNotices.map((notice, index) => (
                    <div
                        key={notice.id}
                        className={`p-4 rounded-lg border transition-all duration-300 ${categoryColors[notice.category].bg} ${categoryColors[notice.category].border}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-start justify-between gap-2">
                            <h4 className={`font-semibold ${categoryColors[notice.category].text}`}>
                                {notice.title}
                            </h4>
                            <span className="text-xs text-subtle-light whitespace-nowrap">
                                {formatDate(notice.date)}
                            </span>
                        </div>
                        <p className="text-sm text-subtle-light mt-1">{notice.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


